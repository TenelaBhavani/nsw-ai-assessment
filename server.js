const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (email === "admin@gmail.com" && password === "1234") {
        res.send("Login Successful!");
    } else {
        res.send("Invalid Credentials");
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
