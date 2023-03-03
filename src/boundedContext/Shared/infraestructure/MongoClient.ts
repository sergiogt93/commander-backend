import mongoose from "mongoose";
import config_env from "../../../../config/config_env";

const MONGODB_URL: string = config_env.MONGO_URI;

export default class MongoClient {

  public async connection() {
    try {
      mongoose.set('strictQuery', false);
      mongoose.connect(MONGODB_URL);
      console.log('Conectado a la base de datos');
    } catch (error) {
      // console.error(error);
    }
  }
}