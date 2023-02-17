module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = [
            "What's that in your eye? Oh... it's a sparkle",
            "Please try again later",
            "Now is a good time to buy stock.",
            "Oh No... That's not good...",
            "Fortune Not Found: Abort, Retry, Ignore?"
        ];
        let randomNum = Math.floor(Math.random()*fortunes.length);
        let randomFortune = fortunes[randomNum];
        res.status(200).send(randomFortune);
    }

}