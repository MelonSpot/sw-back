require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const port = process.env.SERVICE_PORT || 3000;
const app = express();

const connect = require("./schemas");
connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routes);

const start = async () => {
    try {
        app.listen(port, () => {
            console.log("Server is running. PORT :", port);
        });
    } catch (error) {
        console.error(error);
    }
};

start();
