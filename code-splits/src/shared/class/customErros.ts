export class EnvNotFoundError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'EnvNotFoundError'

    Object.setPrototypeOf(this, EnvNotFoundError.prototype)
  }
}

export class MissingParamError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'MissingParamError'

    Object.setPrototypeOf(this, MissingParamError.prototype)
  }
}

export class InjectionError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'InjectionError'

    Object.setPrototypeOf(this, MissingParamError.prototype)
  }
}

export class AuthProvider extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'AuthProvider'

    Object.setPrototypeOf(this, MissingParamError.prototype)
  }
}

export class SessionError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'SessionError'

    Object.setPrototypeOf(this, MissingParamError.prototype)
  }
}
