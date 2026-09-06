const http = require('http');
const { MongoClient } = require("mongodb"); // mondgodb external packagini chaqirish

let db;
const connectionString = "mongodb+srv://makhmudovsax17:6Bsy7S@i$_y5Mf9@cluster0.kwvwl9d.mongodb.net/Reja";

MongoClient.connect(connectionString, // MongoClientni connect degan objectini chaqirib kerakli argument berdik
    {
        useNewUrlParsel: true,
        useUnifiedTopology: true,
},
(err, client) => { // arrow function va parametrlar: err, client
    if(err) console.log("ERROR on connection MongoDB"); // hatolik yuzaga kelsa shu message yuboriladi
    else {
        console.log("MongoDB connection succeed"); // hatolik bo'lmasa shu message yuboriladi
        module.exports = client;

        const app = require("./app"); // app nomli faylni chaqirish serverimiz shu appda qurilgan
        const server = http.createServer(app); // programmani kompyuterga biriktirish
        let PORT = 3000; // kompyuterga biriktirilgan programmani portga bog'lash
        server.listen(PORT, function () {
            console.log(`Sefver is running successfully on port: ${PORT}, http://localhost:${PORT}`);
        });
    }
}); // callback function - bu nimadur bajarilsa o'shandan keyin yurgiziladigan functionning nomi CALLBACK FUNCTION