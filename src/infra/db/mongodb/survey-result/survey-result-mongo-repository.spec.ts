import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'
import { SurveyResultMongoRepository } from './survey-result-mongo-repository'
import { fakeSurveyModel, fakeAccountModel } from '@/domain/test'
import { Collection } from 'mongodb'

const makeSut = (): SurveyResultMongoRepository => {
  return new SurveyResultMongoRepository()
}

describe('Survey Result Mongo Repository', () => {
  let surveyResultCollection: Collection
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    surveyResultCollection = await MongoHelper.getCollection('surveyResults')
    await surveyResultCollection.deleteMany({})
  })

  test('Should add a survey result if its new', async () => {
    const survey = fakeSurveyModel()
    const account = fakeAccountModel()
    const sut = makeSut()
    const surveyResult = await sut.save({
      surveyId: survey.id,
      accountId: account.id,
      answer: survey.answers[0].answer,
      date: new Date()
    })
    expect(surveyResult).toBeTruthy()
    expect(surveyResult.id).toBeTruthy()
    expect(surveyResult.answer).toBe(survey.answers[0].answer)
  })

  test('Should update survey result if its not new', async () => {
    const survey = await fakeSurveyModel()
    const account = fakeAccountModel()
    const res = await surveyResultCollection.insertOne({
      surveyId: survey.id,
      accountId: account.id,
      answer: survey.answers[0].answer,
      date: new Date()
    })
    const sut = makeSut()
    const surveyResult = await sut.save({
      surveyId: survey.id,
      accountId: account.id,
      answer: survey.answers[1].answer,
      date: new Date()
    })
    expect(surveyResult).toBeTruthy()
    expect(surveyResult.id).toEqual(res.ops[0]._id)
    expect(surveyResult.answer).toBe(survey.answers[1].answer)
  })
})
