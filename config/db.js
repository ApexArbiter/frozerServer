const mongoose = require("mongoose")


async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connnect to DB")
    } catch (err) {
        console.error("Failed to connect to MongoDB", err)
        console.log(err)
    }
}

module.exports = connectDB