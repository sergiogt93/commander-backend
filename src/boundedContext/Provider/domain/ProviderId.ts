export default class ProviderId {

  constructor(
    public readonly value: string
  ) {
    this.ensureIsValid(value);
  }

  private ensureIsValid(value: string): void {
  }
  
}