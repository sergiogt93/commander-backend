import Provider from '../domain/Provider';
//import ProviderRepository  from '../domain/ProviderRepository';

export default function ProviderCreator (id: string, name: string, duration: string) {
  //let repository: ProviderRepository;

  const Provider: Provider = { id, name };

  return Provider;
}