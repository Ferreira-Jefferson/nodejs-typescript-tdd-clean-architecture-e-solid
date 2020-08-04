import { BcryptAdapter } from './bcrypt-adapter'
import bcrypt from 'bcrypt'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return await new Promise(resolve => resolve('valid_hash'))
  },

  async compare (): Promise<boolean> {
    return await new Promise(resolve => resolve(true))
  }
}))

const salt = 12
const makeSut = (): BcryptAdapter => {
  return new BcryptAdapter(salt)
}

describe('Bcrypt Adapter: hash', () => {
  test('Should call hash with correct values', async () => {
    const sut = makeSut()
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    const value = 'any_value'
    await sut.hash(value)
    expect(hashSpy).toHaveBeenCalledWith(value, salt)
  })

  test('Should return a valid hash on hash success', async () => {
    const sut = makeSut()
    const hash = await sut.hash('any_value')
    expect(hash).toBe('valid_hash')
  })

  test('Should throw if bcrypt throws', async () => {
    const sut = makeSut()
    jest.spyOn(bcrypt, 'hash').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const promise = sut.hash('any_value')
    await expect(promise).rejects.toThrow()
  })
})

describe('Bcrypt Adapter: compare', () => {
  const value = 'any_value'
  const hash = 'any_hash'

  test('Should call compare with correct values', async () => {
    const sut = makeSut()
    const compareSpy = jest.spyOn(bcrypt, 'compare')
    await sut.compare(value, hash)
    expect(compareSpy).toHaveBeenCalledWith(value, hash)
  })

  test('Should return true when compare succeeds', async () => {
    const sut = makeSut()
    const isValid = await sut.compare(value, hash)
    expect(isValid).toBe(true)
  })
})
