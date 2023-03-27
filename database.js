const mysql = require("mysql");


const connection = mysql.createConnection({
    host: "localhost",
    database: "veterinaria",
    user: "root",
    password: "admin",
})

const getConnection = () => {
    return connection;
}

module.exports = {
    getConnection
}