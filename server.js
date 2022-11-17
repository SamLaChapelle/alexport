//initializing express
const express = require("express");
const app = express()
//setting up default port
const port = process.env.PORT || 5000;
//binding our server to a static directory
app.use(express.static("./client/build"));
//setting up route handler
app.get("*", (req, res) => {
    res.sendFile(__dirname + "./client/build/index.html");
});
//open a connection to listen for, and respond and requests
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});