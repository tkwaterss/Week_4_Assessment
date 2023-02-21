const fortunesDB = require("./fortunes.json");
const complimentsDB = require("./compliments.json");

module.exports = {
    getYourFortune: (req, res) => {
        returnInfo = {
            fortune: []
        };
        let randomFortIndex = Math.floor(Math.random() * fortunesDB.length);
        let randomCompIndex = Math.floor(Math.random() * complimentsDB.length);
        returnInfo.fortune.push(complimentsDB[randomCompIndex]);
        returnInfo.fortune.push(fortunesDB[randomFortIndex]);
        // console.log(returnInfo);
        res.status(200).send(returnInfo);
    },
    getAllFortunes: (req, res) => {
        let returnData = {};
        returnData.fortunes = fortunesDB;
        returnData.compliments = complimentsDB;
        // console.log(returnData);
        res.status(200).send(returnData);
    },
    addFortune: (req, res) => {
        let returnData = {};
        let {type} = req.params;
        let {content} = req.body;
        // console.log(content);
        // console.log(type);
        if(type === "compliment") {
            complimentsDB.push(content);
        } else if (type === "fortune") {
            fortunesDB.push(content);
        }
        returnData.fortunes = fortunesDB;
        returnData.compliments = complimentsDB;
        // console.log(returnData);
        res.status(200).send(returnData);
    },
    deleteListItem: (req, res) => {
        let returnData = {};
        let {index, type} = req.query;
        if (type === 'compliment') {
            complimentsDB.splice(+index,1);
        } else if (type === 'fortune') {
            fortunesDB.splice(+index,1);
        }
        returnData.fortunes = fortunesDB;
        returnData.compliments = complimentsDB;
        // console.log(returnData);
        res.status(200).send(returnData);
    },
    editListItem: (req, res) => {
        let returnData = {};
        let {index, type} = req.query;
        let {newContent} = req.body;
        if (type === 'compliment') {
            complimentsDB.splice(index,1,newContent);
        } else if (type === 'fortune') {
            fortunesDB.splice(index,1,newContent);
        }
        returnData.fortunes = fortunesDB;
        returnData.compliments = complimentsDB;
        // console.log(returnData);
        res.status(200).send(returnData);
    }
}