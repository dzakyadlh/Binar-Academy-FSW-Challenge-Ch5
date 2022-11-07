const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const data = require("./routes/users.json");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('./public'));
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(session({
    secret: 'secret123',
    saveUninitialized: true,
    resave: true,
}));
app.use(flash());

const validator = (req, res, next) => {
    const {email, password} = req.body;
    const isFoundEmail = data.find((row) => row.email == email);
    const isFoundPassword = data.find((row) => row.password == password);
    if(isFoundEmail && isFoundPassword) {
        next();
    }
    else{
        res.render("login.ejs", {incorrect:true});
    }
}

app.get("/", (req, res) => {
    if(req.flash('success') == 'yes'){
        res.render("homepage.ejs", {loggedIn: true});
    }
    else{
        res.render("homepage.ejs", {loggedIn: false});
    }
})

app.get("/home", (req, res) => {
    if(req.flash('success') == 'yes'){
        res.render("homepage.ejs", {loggedIn: true});
    }
    else{
        res.render("homepage.ejs", {loggedIn: false});
    }
})

app.get("/game", (req, res) => {
    res.render("game.ejs");
})

app.get("/404", (req, res) => {
    res.render("404.ejs");
})

app.get("/login", (req, res) => {
    res.render("login.ejs", {incorrect:false});
})

app.post("/login", validator, (req, res) => {
    req.flash('success', 'yes');
    res.redirect("/home");
})

app.use((req, res) => {
    res.status(404).redirect("/404")
})

app.listen(8000, () => console.log(`Listening at http://localhost:${8000}`));