import { Controller, HttpResponse, HttpRequest } from './add-survey-protocols-controller'
import { Validation } from './../../../protocols/validation'
import { badRequest } from './../../../helpers/http/http-helper'

export class AddSurveyController implements Controller {
  constructor (private readonly validation: Validation) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = this.validation.validate(httpRequest.body)
    if (error) {
      return badRequest(error)
    }
    return await new Promise(resolve => resolve(null))
  }
}
