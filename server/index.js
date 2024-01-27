const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = require("./server.json").port;
const cors = require("cors");
const x = require("../database/Texas A&M University.json");

app.use(express.static("../public/pages/home"));
app.use(cors());

app.get('/', (req, res) => {
    
    res.sendFile(path.join(__dirname, "../public/pages/home/index.html"));
});

app.get('/college/:name/:major/:year', async (req, res) => {
    const { name, major, year } = req.params;

    let files = fs.readdirSync("../database/");
    console.log(major);
    
    for (let i = 0; i < files.length; i++) {
        if (`${name}.json` == files[i]) {
            let file = JSON.parse(fs.readFileSync(`../database/${name}.json`));
            let resObj = {
                courses: file["Majors"][0][major][year]["Courses"],
                credits: file["Majors"][0][major]["CredsToGrad"]
            };
            res.send(resObj);
        }
    }
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});