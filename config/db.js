const mongoose = require("mongoose");
const dns = require("dns")
dns.setServers(["8.8.8.8","8.8.4.4"])
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://sivakanthdevarabhotla:siva11390@cluster0.ik7cz4d.mongodb.net/sivakanth");
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};
module.exports = connectDB;


       
