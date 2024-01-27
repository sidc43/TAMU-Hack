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

app.get('/college/:name/:major/:year', async (req, res) => {
    const { name, major, year } = req.params;

    let files = fs.readdirSync("../database/");
    
    for (let i = 0; i < files.length; i++) {
        if (`${name}.json` == files[i]) {
            let file = JSON.parse(fs.readFileSync(`../database/${name}.json`));
            let resObj = {
                courses: file["Majors"][major][year]["Courses"],
                credits: file["Majors"][major]["CredsToGrad"]
            };
            res.send(resObj);
        }
    }

    res.send(404);
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});