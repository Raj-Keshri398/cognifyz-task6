import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcryptjs";
import session from "express-session";
import db from "./db.js";

const app = express();

/* ---------- SETUP ---------- */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* IMPORTANT (JSON + FORM BOTH) */
app.use(express.json());                  // Fetch API JSON
app.use(express.urlencoded({ extended: true }));

/* ---------- SESSION ---------- */
app.use(session({
    secret: "task6_secret",
    resave: false,
    saveUninitialized: false
}));

/* ---------- VIEW ENGINE ---------- */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/* ---------- ROUTES ---------- */

// Landing page
app.get("/", (req, res) => {
    res.render("index");
});

// Register page
app.get("/register", (req, res) => {
    res.render("register");
});

// Login page
app.get("/login", (req, res) => {
    res.render("login");
});

/* ---------- REGISTER (TASK-6) ---------- */
app.post("/register", async (req, res) => {
    const { name, email, phone, address, pincode, password } = req.body;

    if (!name || !email || !phone || !address || !pincode || !password) {
        return res.json({ success: false, message: "All fields required" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = `
            INSERT INTO users (name,email,phone,address,pincode,password)
            VALUES (?,?,?,?,?,?)
        `;

        db.query(
            sql,
            [name, email, phone, address, pincode, hashedPassword],
            (err) => {
                if (err) {
                    return res.json({
                        success: false,
                        message: "User already exists"
                    });
                }

                return res.json({
                    success: true,
                    message: "Registered successfully"
                });
            }
        );
    } catch (err) {
        res.json({ success: false, message: "Server error" });
    }
});

/* ---------- LOGIN ---------- */
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    db.query(
        "SELECT * FROM users WHERE email=?",
        [email],
        async (err, result) => {
            if (result.length === 0) {
                return res.send("Invalid email or password");
            }

            const match = await bcrypt.compare(password, result[0].password);
            if (!match) {
                return res.send("Invalid email or password");
            }

            // save session
            req.session.user = {
                id: result[0].id,
                name: result[0].name,
                email: result[0].email
            };

            res.redirect("/dashboard");
        }
    );
});

/* ---------- PROTECTED DASHBOARD ---------- */
app.get("/dashboard", (req, res) => {
    if (!req.session.user) {
        return res.redirect("/login");
    }

    db.query("SELECT id,name,email FROM users", (err, users) => {
        res.render("dashboard", {
            user: req.session.user,
            users
        });
    });
});

/* ---------- LOGOUT ---------- */
app.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/login");
    });
});

/* ---------- SERVER ---------- */
app.listen(3200, () => {
    console.log("Task-6 server running on port 3200");
});
