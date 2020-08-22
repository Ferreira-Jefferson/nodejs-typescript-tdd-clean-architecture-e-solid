import { Validation } from '@/presentation/protocols/validation'

export const stubValidation = (): Validation => {
  class ValidationStubs implements Validation {
    validate (input: any): Error {
      return null
    }
  }
  return new ValidationStubs()
}
