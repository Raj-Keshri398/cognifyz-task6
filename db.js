import mysql from "mysql2";

const db = mysql.createConnection({
    host: "localhost",  // XAMPP default host
    user: "root", // XAMPP default user
    password: "",              // XAMPP default has no password
    database: "cognifyz_db"    // Database name
});

db.connect(err => {
    if (err) {
        console.log("DB Error:", err);
    } else {
        console.log("Database Connected");
    }
});

export default db;
