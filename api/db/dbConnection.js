require('dotenv').config();
const mongoose = require('mongoose');

const mongoUri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("MongoDB is connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectDB;
