const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { 
    getYourFortune,
    getAllCompliments,
    getAllFortunes,
    addYourOwn,
    editItem,


} = require('./controller')

app.get("/api/fortunes/yourFortune", getYourFortune);


// app.get("/api/compliment", getCompliment);
// app.get("/api/fortune", getFortune);
// app.get("/api/fortunes", getAllFortunes);
// app.post("/api/fortune/:fortune", addFortune);
// app.delete("/api/fortune/", deleteFortune);
// app.put("/api/fortune/:id", changeFortune);

app.listen(4000, () => console.log("Server running on 4000"));
