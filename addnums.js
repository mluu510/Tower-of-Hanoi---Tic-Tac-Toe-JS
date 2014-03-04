var readline = require('readline');

var READER = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var addNumbers = function(sum, numsLeft, completionCallback)
{
  if (numsLeft > 0)
  {
    READER.question("Type in a number: ", function(answer)
    {
      sum += parseInt(answer);
      console.log("Current total: " + sum);
      addNumbers(sum, numsLeft-1, completionCallback);
    });
  }
  else
  {
    completionCallback(sum);
    READER.close();
  }
};

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});