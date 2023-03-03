import { ProviderCreatorRequest } from '../application/ProviderCreatorRequest';
import Provider from './Provider';

export default interface ProviderRepository {
  save(provider: ProviderCreatorRequest): Promise<Provider>;
}