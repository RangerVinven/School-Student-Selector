const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
require("dotenv").config();
const bodyParser = require("body-parser");

// For hashing the password
const cryptoModule = require("crypto");

// Configures the app variable
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configures the connection for the mysql database
let connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE
});

// Generates a session token
const generateToken = () => {
    const charsToChooseFrom = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@£$%^&*())-=_+{}|[];':";
    const currentEpochTime = Number(Date.now()).toString();

    const token = cryptoModule.createHmac("sha256", currentEpochTime + charsToChooseFrom[Math.random() * charsToChooseFrom.length] + charsToChooseFrom[Math.random() * charsToChooseFrom.length]).digest("hex");
    return token;
} 

// Connects to the mysql database
connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
    
    // Signs the user up
    app.post("/api/signin", (req, res) => {
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

    // Signs the user up
    app.post("/api/signup", (req, res) => {
        // Makes sure the user enters the username and password
        if(req.body.username === "" || req.body.username === undefined || req.body.password === "" || req.body.password === undefined) {
            res.send({
                "error": {
                    ...((req.body.username === "" || req.body.username === undefined) && {"usernameError": "Username not entered"}),
                    ...((req.body.password === "" || req.body.password === undefined) && {"passwordError": "Password not entered"}),
                }
            });
        } else {
            const token = generateToken();

            // Adds the user to the database
            connection.query("INSERT INTO Users (Username, Password, SessionToken) VALUES (?, ?, ?);", [req.body.username, cryptoModule.createHmac("sha256", req.body.password).digest("hex"), token], (err, result) => {
                if (err) throw err;

                // Responds with the user's session token
                res.send({
                    "token": token
                })
            });
        }
    });

});

app.listen(8000, () => {
    console.log("Listening on 8000");
})