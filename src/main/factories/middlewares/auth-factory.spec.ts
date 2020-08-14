import { adaptMiddleware } from './../../adapters/express-middleware-adapter'
import { makeAuthMiddleware } from './auth-middleware-factory'
import { auth } from './auth-factory'

jest.mock('./../adapters/express-middleware-adapter')
jest.mock('./../factories/middlewares/auth-middleware-factory')

describe('Auth Middleware', () => {
  test('Should call adaptMiddleware with makeAuthMiddleware', () => {
    auth()
    expect(adaptMiddleware).toHaveBeenCalledWith(makeAuthMiddleware())
  })

  test('Should call makeAuthMiddleware with admin', () => {
    auth('admin')
    expect(makeAuthMiddleware).toHaveBeenCalledWith('admin')
  })

  test('Should auth return falsy', () => {
    const result = auth('admin')
    expect(result).toBeFalsy()
  })
})
