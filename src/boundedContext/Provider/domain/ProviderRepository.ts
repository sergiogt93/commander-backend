import { ProviderCreatorDTO } from '../application/ProviderDTO';
import Provider from './Provider';

export default interface ProviderRepository {
  save(provider: ProviderCreatorDTO): Promise<Provider>;
}