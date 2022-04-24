const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/signin", (req, res) => {
    // Check if the user enters valid credentials
    if(req.body.email === "test" && req.body.password === "test") {
        res.send({
            "token": "fh64lnz"
        });
    } else {
        res.send({
            "error": "Invalid credentials"
        })
    }
    
});

app.listen(8000, () => {
    console.log("Listening on 8000");
})