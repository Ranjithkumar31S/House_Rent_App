const mongoose = require('mongoose');

const connectionOfDb = () => {
  const mongoUri = process.env.MONGO_DB || 'mongodb://127.0.0.1:27017/yourDatabase';

  console.log("Attempting to connect to MongoDB URI:", mongoUri); // Debugging

  mongoose
    .connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error(`Could not connect to MongoDB: ${err}`);
      process.exit(1); // Exit process if MongoDB connection fails
    });
};

module.exports = connectionOfDb;
