const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  mongoURI: process.env.HEALTH_POTATOES_MONGO_URI,
  jwtSecret: process.env.HEALTH_POTATOES_JWT_SECRET
}
