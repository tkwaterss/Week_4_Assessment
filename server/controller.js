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
        console.log(req.params);
        let {index} = req.params;
        console.log(typeof index);





        // returnData.fortunes = fortunesDB;
        // returnData.compliments = complimentsDB;
        // console.log(returnData);
        // res.status(200).send(returnData);
    }
    
    
    
    
    // getCompliment: (req, res) => {
    //     const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
    //     // choose random compliment
    //     let randomIndex = Math.floor(Math.random() * compliments.length);
    //     let randomCompliment = compliments[randomIndex];
      
    //     res.status(200).send(randomCompliment);
    // },
    // getFortune: (req, res) => {
    //     let randomNum = Math.floor(Math.random()*fortunes.length);
    //     let randomFortune = fortunes[randomNum];
    //     res.status(200).send(randomFortune);
    // },
    // getAllFortunes: (req,res) => {
    //     // console.log(fortunes)
    //     res.status(200).send(fortunes);
    // },
    // addFortune: (req, res) => {
    //     console.log(req.params);
    //     fortunes.push(req.params.fortune)
    //     res.status(200).send(fortunes);
    // },
    // deleteFortune: (req, res) => {
    //     fortunes.shift()
    //     console.log(fortunes)
    //     res.status(200).send(fortunes);
    // },
    // changeFortune: (req, res) => {
    //     console.log(req.params);
    //     let {id} = req.params
    //     console.log(typeof id);
    //     let array = id.split(',')
    //     console.log(array)

    //     fortunes.splice((+array[0] - 1),1,array[1])
    //     res.status(200).send(fortunes);
    // }
}