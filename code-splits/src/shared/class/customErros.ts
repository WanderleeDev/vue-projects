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
