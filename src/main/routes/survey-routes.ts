import { Router } from 'express'
import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { makeAddSurveyController } from '@/main/factories/controllers/survey/add-survey/add-survey-controller-factory'
import { makeLoadSurveysController } from '@/main/factories/controllers/survey/load-surveys/load-surveys-controller-factory'
import { auth } from '@/main/factories/middlewares/auth-factory'

export default (router: Router): void => {
  router.post('/surveys', auth('admin'), adaptRoute(makeAddSurveyController()))
  router.get('/surveys', auth(), adaptRoute(makeLoadSurveysController()))
}
