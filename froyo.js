//function containing object to collect, parse, loop, and iterate over inputflavors
function collectInputFlavors() {
  // create object to hold data
  const inputFlavors = {};
  //prompt user to input various flavors
  const flavorString = prompt("Please enter your flavors separated by commas.");
  //parse string of input data into an array
  let arrayFlavors = flavorString
    ? flavorString.split(",").map((item) => item.trim())
    : [];
  inputFlavors.item = arrayFlavors;
  //iterate over array using for...in to determine inputs
  for (const key in inputFlavors) {
    if (inputFlavors.hasOwnProperty(key)) {
      //access array using input "key"
      const array = inputFlavors[key];
      for (const value of arrayFlavors) {
        //update count if flavor is repeated
        if (inputFlavors.hasOwnProperty(value)) {
          inputFlavors[value]++;
          //if it is a new entry, add the key with a value of 1
        } else {
          inputFlavors[value] = 1;
        }
      }
    }
  }
  console.table(inputFlavors);
  console.log(inputFlavors);
  return inputFlavors;
}
collectInputFlavors();
