const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { 
    getYourFortune,
    getAllFortunes,
    addFortune,
    deleteListItem,
    editListItem
} = require('./controller')

app.get("/api/fortunes/yourFortune", getYourFortune);
app.get("/api/fortunes/allFortunes", getAllFortunes);
app.post("/api/fortunes/:type", addFortune);
app.delete("/api/fortunes", deleteListItem);
app.put("/api/fortunes", editListItem);

app.listen(4000, () => console.log("Server running on 4000"));
