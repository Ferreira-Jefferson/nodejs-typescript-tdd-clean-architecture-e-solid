import jwt from 'jsonwebtoken'
import { Encrypter } from './../../../data/protocols/criptography/encrypter'

export class JwtAdapter implements Encrypter {
  constructor (private readonly secret_key: string) { }

  async encrypt (value: string): Promise<string> {
    await jwt.sign({ id: value }, this.secret_key)
    return null
  }
}
