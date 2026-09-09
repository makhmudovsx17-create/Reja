console.log("Web Serverni Boshlash"); // ichidagi yozuvni browserga chiqaradi
const express = require("express"); // Express frameworkni loyihaga ulab ishlatadi
const res = require("express/lib/response"); // Expressning response prototipe objectini yuklaydi
const app = express(); // dastur va server cofiglarini boshqaradigan EX nishasini yaratadi
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data)
    }
}); // database/user.json dagi malumotlarni o'qiydi

// MongoDB chaqirish
const db = require("./server").db(); // ./server ichidagi malumotlarni keyin ishlatish uchun dbga saqlash
const mongodb = require("mongodb");

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json()); // json formatida kelayotgan fayllarni o'qish uchun js formatga o'tkazib beradi
app.use(express.urlencoded({extended: true})); // app HTML fayllarni tushunishiga yordam beradi 

// 2: Session code

// 3: Views code
app.set("views", "views"); // expressga template fayllar qayerdaekanligini ko'rsatadi
app.set("view engine", "ejs"); // Node.js frameworkida ejs faylini asosiy engine qilib sozlab beradi

// 4: Routing code
app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");
    const new_reja = req.body.reja;
    // Traditional Post => Modern Post
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        res.json(data.ops[0]);
    });
});

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne(
        {_id: new mongodb.ObjectId(id)}, 
        function(err, data) {
            res.json({ state: "success" });
        }
    );
});

app.post("/edit-item", (req, res) => {
    const data = req.body;
    db.collection("plans").findOneAndUpdate(
        {_id: new mongodb.ObjectId(data.id)}, 
        {$set: {reja: data.new_input}}, 
        function(err, result) {
            if (err) return res.status(500).json({ error: err });
            res.json({ state: "success" });
        }
    );
});

app.get('/author', (req, res) => {
    res.render("author", { user: user });
});

app.post("/delete-all", (req, res) => {
    if(req.body.delete_all) {
        db.collection("plans").deleteMany({}, function(err, result) {
    if (err) return res.status(500).json({ error: err });
        res.json({ state: "hamma rejalar ochirildi" });
    });
    }
});

app.get('/', function (req, res) {
    console.log('user entered /');
    db.collection("plans")
    .find() // collectiondagi hamma narsani olib kelib beradi
    .toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            console.log(data);
            res.render("reja", { items: data}); // render: ejs dan HTML shakllantiradi va userga jo'natamiz
        }
    });
});

module.exports = app;