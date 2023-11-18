const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    username: "root",
    password: "",
    database: "ACS"
});

app.get('/', (re, res) => {
    return res.json("From Backend")
});

app.get("")

app.listen(8081, () => {
    console.log("Listening...")
});