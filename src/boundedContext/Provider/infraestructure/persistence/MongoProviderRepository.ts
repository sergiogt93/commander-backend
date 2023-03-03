import mongoose, { Model } from 'mongoose';
import { ProviderCreatorRequest } from '../../application/ProviderCreatorRequest';
import ProviderRepository from '../../domain/ProviderRepository';
import ProviderSchema from './ProviderSchema';

export default class MongoProviderRepository implements ProviderRepository {
  public readonly client: Model<any>

  constructor() {
    console.log("Se para al principio");
    this.client = mongoose.model(this.collectionName(), ProviderSchema)
  }

  private collectionName(): string {
    return 'providers';
  }

  public save(provider: ProviderCreatorRequest)  {
    const newProvider = this.client.create(provider);
    return newProvider;
  }
}