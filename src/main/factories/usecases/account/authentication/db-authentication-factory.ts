import env from '@/main/config/env'
import { DbAuthentication } from '@/data/usecases/account/authentication/db-authentication'
import { Authentication } from '@/domain/usecases/account/authentication'
import { AccountMongoRepository } from '@/infra/db/mongodb/account/account-mongo-repository'
import { BcryptAdapter } from '@/infra/criptography/bcrypt-adapter/bcrypt-adapter'
import { JwtAdapter } from '@/infra/criptography/jwt-adapter/jwt-adapter'

export const makeDbAuthentication = (): Authentication => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter(env.jwt_secret)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAuthentication(accountMongoRepository, bcryptAdapter, jwtAdapter, accountMongoRepository)
}
