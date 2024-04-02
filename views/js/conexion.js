const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.listen(3000, function(){
    console.log("OK")
})

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'login_register_db'
});
