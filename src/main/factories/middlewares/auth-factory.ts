import { adaptMiddleware } from '@/main/adapters/express-middleware-adapter'
import { makeAuthMiddleware } from './auth-middleware-factory'

/**
 * @description Sets the route authorization level
 * @param { string } type
 * @expected undefined | "admin"
*/
export const auth = (type?: string): any => adaptMiddleware(makeAuthMiddleware(type))
