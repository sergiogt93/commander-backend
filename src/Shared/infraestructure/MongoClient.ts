import mongoose, { ConnectOptions} from "mongoose";
import config_env from "../../../config/config_env";

const MONGODB_URL: string = config_env.MONGO_URI;

export default class MongoClient {

  public async connection(): Promise<void> {
    try {
      mongoose.set('strictQuery', false);
      mongoose.connect(MONGODB_URL,  {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        minPoolSize: 1,
        maxPoolSize: 20,
        socketTimeoutMS: 60000,
        serverSelectionTimeoutMS: 60000,
        loggerLevel: 'error',
      } as ConnectOptions);
      console.log('Conectado a la base de datos');
    } catch (error) {
      // console.error(error);
    }
  }
}