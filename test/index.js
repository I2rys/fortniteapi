//Dependencies
const SBFAFFIM = require("../index.js")

//Variables
const FI = new SBFAFFIM.FI("your_fortnite.io_apikey_here")

//Functions
async function Main(){
    const results = await FI.tournament_scores()

    console.log(results)
}

//Main
Main()
