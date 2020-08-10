import { Controller, HttpResponse, HttpRequest } from './add-survey-protocols-controller'
import { Validation } from './../../../protocols/validation'

export class AddSurveyController implements Controller {
  constructor (private readonly validation: Validation) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    this.validation.validate(httpRequest.body)
    return await new Promise(resolve => resolve(null))
  }
}
