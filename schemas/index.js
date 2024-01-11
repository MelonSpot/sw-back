const mongoose = require("mongoose");
require("dotenv").config();

const connectionString = process.env.DB_CONNECTION_STRING;

const connect = () => {
    mongoose.connect(connectionString).catch((err) => console.log(err));
};

mongoose.connection.on("error", (err) => {
    console.error("MongoDB Connection Error", err);
});

module.exports = connect;
