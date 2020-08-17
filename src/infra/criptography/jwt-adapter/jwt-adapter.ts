import jwt from 'jsonwebtoken'
import { Encrypter } from '@/data/protocols/criptography/encrypter'
import { Decrypter } from '@/data/protocols/criptography/Decrypter'

export class JwtAdapter implements Encrypter, Decrypter {
  constructor (private readonly secret_key: string) { }

  async encrypt (value: string): Promise<string> {
    const accessToken = await jwt.sign({ id: value }, this.secret_key)
    return accessToken
  }

  async decrypt (token: string): Promise<string> {
    const value: any = await jwt.verify(token, this.secret_key)
    return value
  }
}
