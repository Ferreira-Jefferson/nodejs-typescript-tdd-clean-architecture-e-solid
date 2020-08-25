import { accountSchema, loginParamsSchema, errorSchema, surveySchema, surveysSchema, surveyAnswerSchema, signUpParamsSchema, addSurveyParamsSchema, saveSurveyParamsSchema, surveyResultSchema } from './schemas/'

export default {
  account: accountSchema,
  loginParams: loginParamsSchema,
  signUpParams: signUpParamsSchema,
  addSurveyParams: addSurveyParamsSchema,
  saveSurveyParams: saveSurveyParamsSchema,
  error: errorSchema,
  survey: surveySchema,
  surveys: surveysSchema,
  surveyAnswer: surveyAnswerSchema,
  surveyResult: surveyResultSchema
}
