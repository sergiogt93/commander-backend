import Provider from '../domain/Provider';
import MongoProviderRepository  from '../infraestructure/persistence/MongoProviderRepository';
import { ProviderCreatorDTO } from "./ProviderDTO";

export default async function ProviderCreator (request: ProviderCreatorDTO) {
  let repository: MongoProviderRepository = new MongoProviderRepository();

  const newProvider: Provider = await repository.save(request);
  return newProvider;
}