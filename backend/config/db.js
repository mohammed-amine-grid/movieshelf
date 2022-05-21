const mongoose = require('mongoose')

console.log(`HERE ${process.env.DB_URI}`.bgMagenta);

const connectDB = async () => {
  try {
    const cnx = await mongoose.connect(process.env.DB_URI)
    console.log(`MongoDB Connected: ${cnx.connection.host}`.cyan.underline);

  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB