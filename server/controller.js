let fortunes = [
    "What's that in your eye? Oh... it's a sparkle",
    "Please try again later",
    "Now is a good time to buy stock.",
    "Oh No... That's not good...",
    "Fortune Not Found: Abort, Retry, Ignore?"
];



module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        let randomNum = Math.floor(Math.random()*fortunes.length);
        let randomFortune = fortunes[randomNum];
        res.status(200).send(randomFortune);
    },
    getAllFortunes: (req,res) => {
        // console.log(fortunes)
        res.status(200).send(fortunes);
    },
    addFortune: (req, res) => {
        console.log(req.params);
        fortunes.push(req.params.fortune)
        res.status(200).send(fortunes);
    },
    deleteFortune: (req, res) => {
        fortunes.shift()
        console.log(fortunes)
        res.status(200).send(fortunes);
    },
    changeFortune: (req, res) => {
        console.log(req.params);
        let {id} = req.params
        console.log(typeof id);
        let array = id.split(',')
        console.log(array)

        fortunes.splice(+array[0],1,array[1])
        res.status(200).send(fortunes);
    }

}