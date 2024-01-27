const express = require("express");
const fs = require("fs");
const app = express();
const port = require("./server.json").port;

app.get('/', (req, res) => {
    res.send("Test");
});

app.listen(port, (console.log(`Listening on port ${port}`)));