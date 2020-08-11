import { forbidden } from '../helpers/http/http-helper'
import { AccessDeniedError } from './../errors'
import { Middleware, HttpResponse, HttpRequest } from './../protocols'

export class AuthMiddleware implements Middleware {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = forbidden(new AccessDeniedError())
    return await new Promise(resolve => resolve(error))
  }
}
