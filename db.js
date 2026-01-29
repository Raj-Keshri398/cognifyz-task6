import mysql from "mysql2";

const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "",
    database: process.env.DB_NAME || "cognifyz_db",
    port: process.env.DB_PORT || 3306
});

db.connect(err => {
    if (err) {
        console.error("DB Connection Error:", err.message);
    } else {
        console.log("Database Connected");
    }
});

export default db;
