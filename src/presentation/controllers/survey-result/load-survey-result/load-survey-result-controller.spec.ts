import { LoadSurveyResultController } from './load-survey-result-controller'
import { HttpRequest } from './load-survey-result-controller-protocols'
import { stubLoadSurveyById } from '@/presentation/test'

const makeFakeRequest = (): HttpRequest => ({
  params: {
    surveyId: 'any_id'
  }
})

describe('LoadSurveyResult Controller', () => {
  test('Should call LoadSurveyById with correct value', async () => {
    const loadSurveyByIdStub = stubLoadSurveyById()
    const loadByIdSpy = jest.spyOn(loadSurveyByIdStub, 'loadById')
    const sut = new LoadSurveyResultController(loadSurveyByIdStub)
    await sut.handle(makeFakeRequest())
    expect(loadByIdSpy).toBeCalledWith('any_id')
  })
})
