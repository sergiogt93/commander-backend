const config_env = {
  MONGO_URI: process.env.MONGO_URI
    ? process.env.MONGO_URI
    : "mongodb://localhost:27017/commander-backend",
};

export default config_env;