import { LoadSurveyResultRepository } from '@/data/protocols/db/survey-result/load-survey-result-repository'
import { fakeSurveyResultModel } from '@/domain/test'
import { SurveyResultModel } from '@/domain/models/survey-result'

export const stubLoadSurveyResultRepository = (): LoadSurveyResultRepository => {
  class LoadSurveyResultRespositoryStub implements LoadSurveyResultRepository {
    async loadBySurveyId (surveyId: string): Promise<SurveyResultModel> {
      return await Promise.resolve(fakeSurveyResultModel())
    }
  }
  return new LoadSurveyResultRespositoryStub()
}
