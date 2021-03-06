const dotenv = require('dotenv');

const result = dotenv.config();

if (result.error) {
  throw result.error;
}

module.exports = {
  port: process.env.APP_PORT,
  db: {
    connectionString: process.env.USER_MONGO_CONNECTION_STRING,
  },
};
