const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Support both MONGODB_URI and MONGO_URI for flexibility
    const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;
    const conn = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
