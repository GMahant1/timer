//process.stdout.write('\x07');

let userInput = process.argv.splice(2);

const timer = function(userInput) {
  userInput.sort();
  for (let x of userInput) {
    a = Number(x);
    console.log(a, typeof a);
    if (a > 0) {
      setTimeout(() => {
        process.stdout.write('\x07')
      }, a * 1000)
    }
  };
}

timer(userInput);