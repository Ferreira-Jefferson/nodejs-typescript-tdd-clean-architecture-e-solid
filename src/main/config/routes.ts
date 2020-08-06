import { Express, Router } from 'express'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)

  require('../routes/login-routes').default(router)
}
