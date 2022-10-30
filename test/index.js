// Dependencies
const { FI } = require('../index.js');

// Variables
const fi = new FI('your_fortniteapi.io_apikey_here');

// Functions
const main = async () => {
  const results = await fi.tournament_scores('S11_CC_Contenders_EU_Event1');
  console.log(results);
};

// Main
main();
