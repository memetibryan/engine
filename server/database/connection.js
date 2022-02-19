const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    //mongodb connection string
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('MONGO DATABASE CONNECTED SUCCESSFULLY...............');
  } catch (err) {
    console.log(err);
    connection.exit(1);
  }
}

module.exports = connectDB
