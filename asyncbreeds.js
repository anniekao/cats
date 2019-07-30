// asyncBreeds.js
const fs = require("fs");

const breedDetailsFromFile = function(breed, callback) {
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    // ISSUE: Returning from inner callback function, not our main function.
    if (!error) callback(data);
    else callback(undefined);
  });

  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so this function returns undefined.
};

// we try to get the return value
// breedDetailsFromFile("Bombay", (bombay) => {
//   console.log('Return value: ', bombay);
// });
// console.log("Return Value: ", bombay); // => will NOT print out details, instead we will see undefined!

module.exports = breedDetailsFromFile;