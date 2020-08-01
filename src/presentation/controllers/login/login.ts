import { EmailValidator } from './../../protocols/email-validator'
import { badRequest, serverError } from './../../helpers/http-helper'
import { MissingParamError, InvalidParamError } from './../../errors'
import { HttpRequest, HttpResponse } from './../../protocols'
import { Controller } from './../../protocols/controller'

export class LoginController implements Controller {
  constructor (private readonly emailValidator: EmailValidator) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, password } = httpRequest.body
      if (!email) {
        return await new Promise(resolve => resolve(badRequest(new MissingParamError('email'))))
      }
      if (!password) {
        return await new Promise(resolve => resolve(badRequest(new MissingParamError('password'))))
      }
      const isValid = this.emailValidator.isValid(email)
      if (!isValid) {
        return await new Promise(resolve => resolve(badRequest(new InvalidParamError('email'))))
      }
    } catch (error) {
      return serverError(error)
    }
  }
}
