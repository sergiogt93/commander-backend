import { ProviderCreatorRequest } from '../application/ProviderDTO';
import Provider from './Provider';

export default interface ProviderRepository {
  save(provider: ProviderCreatorRequest): Promise<Provider>;
}