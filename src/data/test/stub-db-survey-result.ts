import { SaveSurveyResultRepository } from '@/data/protocols/db/survey-result/save-survey-result-repository'
import { SaveSurveyResultParams } from '@/domain/usecases/survey-result/save-survey-result'

export const stubSaveSurveyResultRepository = (): SaveSurveyResultRepository => {
  class SaveSurveyResultRepositoryStub implements SaveSurveyResultRepository {
    async save (data: SaveSurveyResultParams): Promise<void> {
      return await new Promise(resolve => resolve())
    }
  }
  return new SaveSurveyResultRepositoryStub()
}
