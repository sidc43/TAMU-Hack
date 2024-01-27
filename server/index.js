const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = require("./server.json").port;
const TAMU = require("../database/TAMU.json");

app.use(express.static("../public/pages/home"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/pages/home/index.html"));
});

app.listen(port, (console.log(`Listening on port ${port}`)));