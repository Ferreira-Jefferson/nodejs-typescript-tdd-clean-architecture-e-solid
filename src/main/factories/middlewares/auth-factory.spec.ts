import { adaptMiddleware } from '@/main/adapters/express-middleware-adapter'
import { makeAuthMiddleware } from './auth-middleware-factory'
import { auth } from './auth-factory'

jest.mock('@/main/adapters/express-middleware-adapter')
jest.mock('./auth-middleware-factory')

describe('Auth Middleware', () => {
  test('Should call adaptMiddleware with makeAuthMiddleware', () => {
    auth()
    expect(adaptMiddleware).toBeCalledWith(makeAuthMiddleware())
  })

  test('Should call makeAuthMiddleware with admin', () => {
    auth('admin')
    expect(makeAuthMiddleware).toBeCalledWith('admin')
  })

  test('Should auth return falsy', () => {
    const result = auth('admin')
    expect(result).toBeFalsy()
  })
})
