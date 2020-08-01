import { EmailValidator } from './../../protocols/email-validator'
import { badRequest } from './../../helpers/http-helper'
import { MissingParamError, InvalidParamError } from './../../errors'
import { HttpRequest, HttpResponse } from './../../protocols'
import { Controller } from './../../protocols/controller'

export class LoginController implements Controller {
  constructor (private readonly emailValidator: EmailValidator) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body.email) {
      return await new Promise(resolve => resolve(badRequest(new MissingParamError('email'))))
    }
    if (!httpRequest.body.password) {
      return await new Promise(resolve => resolve(badRequest(new MissingParamError('password'))))
    }
    const isValid = this.emailValidator.isValid(httpRequest.body.email)
    if (!isValid) {
      return await new Promise(resolve => resolve(badRequest(new InvalidParamError('email'))))
    }
  }
}
