const express = require("express");

const app = express();

var port = 3070;

app.get("/", (req, res) => res.send("First Docker"));

app.listen(port, () => console.log("Server Started"));
