const fortunesDB = require("./fortunes.json");
const complimentsDB = require("./compliments.json");

module.exports = {
    getYourFortune: (req, res) => {
        returnInfo = [];
        let randomFortIndex = Math.floor(Math.random() * fortunesDB.length);
        let randomCompIndex = Math.floor(Math.random() * complimentsDB.length);
        returnInfo.push(complimentsDB[randomCompIndex]);
        returnInfo.push(fortunesDB[randomFortIndex]);
        console.log(returnInfo);
        res.status(200).send(returnInfo);
    },
    
    
    
    
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