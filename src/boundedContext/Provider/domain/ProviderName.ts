export default class ProviderName {

  constructor(
    public readonly value: string
  ) {
    this.ensureIsValid(value);
  }

  private ensureIsValid(value: string): void {
  }

}