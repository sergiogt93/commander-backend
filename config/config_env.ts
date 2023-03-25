const MONGO_URI: string = process.env.MONGO_URI
? process.env.MONGO_URI
: "mongodb://localhost:27017/commander-backend";

const config_env = {
  MONGO_URI: MONGO_URI,
};

export default config_env;