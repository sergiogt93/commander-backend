import Provider from './Provider';

export default interface ProviderRepository {
  save(provider: Provider): Promise<void>;
}