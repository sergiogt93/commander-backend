import MongoProviderRepository  from '../infraestructure/persistence/MongoProviderRepository';
import { ProviderCreatorRequest } from "./ProviderCreatorRequest";

export default async function ProviderCreator (request: ProviderCreatorRequest) {
  let repository: MongoProviderRepository = new MongoProviderRepository();

  const newProvider = await repository.save(request);
  return newProvider;
}