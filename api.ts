const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/signin", (req, res) => {
    res.send({
        "token": "fh64lnz"
    })
});

app.listen(8000, () => {
    console.log("Listening on 8000");
})