const express = require("express");
const app = express();
const port = 3000;

const connect = require("./schemas");
connect();

app.use(express.json());
app.get("/", async (req, res) => {
    res.send("index page");
});

app.listen(port, () => {
    console.log("Server is running. PORT :", port);
});
