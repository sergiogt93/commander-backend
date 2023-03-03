import mongoose, { Model } from 'mongoose';
import { ProviderCreatorDTO } from '../../application/ProviderDTO';
import Provider from '../../domain/Provider';
import ProviderRepository from '../../domain/ProviderRepository';
import ProviderSchema from './ProviderSchema';

export default class MongoProviderRepository implements ProviderRepository {
  public readonly client: Model<any>

  constructor() {
    this.client = mongoose.model(this.collectionName(), ProviderSchema)
  }

  private collectionName(): string {
    return 'providers';
  }

  public save(provider: ProviderCreatorDTO)  {
    const newProvider: Promise<Provider> = this.client.create(provider);
    return newProvider;
  }
}