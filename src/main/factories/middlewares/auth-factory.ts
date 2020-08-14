import { adaptMiddleware } from './../../adapters/express-middleware-adapter';
import { makeAuthMiddleware } from './auth-middleware-factory';

/**
 * @description Sets the route authorization level
 * @param { string } type 
 * @expected undefined | "admin" 
*/
export const auth = (type?: string) => adaptMiddleware(makeAuthMiddleware(type))