const http = require('http');
const { MongoClient } = require("mongodb");

let db;
const connectionString = "mongodb+srv://makhmudovsax17:6Bsy7S@i$_y5Mf9@cluster0.kwvwl9d.mongodb.net/Reja";

MongoClient.connect(connectionString, 
    {
        useNewUrlParsel: true,
        useUnifiedTopology: true,
},
(err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succeed");
        module.exports = client;

        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function () {
            console.log(`Sefver is running successfully on port: ${PORT}, http://localhost:${PORT}`);
        });
    }
});