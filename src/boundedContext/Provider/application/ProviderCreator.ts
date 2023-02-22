//import Provider from '../domain/Provider';
//import ProviderRepository  from '../domain/ProviderRepository';

import { ProviderCreatorRequest } from "./ProviderCreatorRequest";

export default function ProviderCreator (name: string) {
  //let repository: ProviderRepository;

  const Provider: ProviderCreatorRequest = { name };
  return Provider;
}