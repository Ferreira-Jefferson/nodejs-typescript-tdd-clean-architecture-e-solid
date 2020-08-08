import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'
import { Collection } from 'mongodb'
import { BcryptAdapter } from '../../infra/criptography/bcrypt-adapter/bcrypt-adapter'

describe('Login Routes', () => {
  let accountCollection: Collection

  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup Routes', () => {
    test('Should return 200 on signup', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'valid_name',
          email: 'valid_email@mail.com',
          password: 'valid_password',
          passwordConfirmation: 'valid_password'
        })
        .expect(200)
    })
  })

  describe('POST /login Routes', () => {
    test('Should return 200 on login', async () => {
      const bcryptAdapter = new BcryptAdapter(12)
      const password = await bcryptAdapter.hash('valid_password')
      await accountCollection.insertOne({
        name: 'valid_name',
        email: 'valid_email@mail.com',
        password
      })
      await request(app)
        .post('/api/login')
        .send({
          email: 'valid_email@mail.com',
          password: 'valid_password'
        })
        .expect(200)
    })

    test('Should return 401 on login', async () => {
      await request(app)
        .post('/api/login')
        .send({
          email: 'invalid_email@mail.com',
          password: 'any_password'
        })
        .expect(401)
    })
  })
})
