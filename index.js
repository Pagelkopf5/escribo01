const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
  
readline.question('Digite um número? ', n => {
  let total = 0;
  for (let index = 1; index < n; index++) {
    let d3 = index * 3;
    let d5 = index * 5;
    if(d3 < n) {
      total = total + d3;
      if(d5 < n && d5 != d3) {
        total = total + d5;
      }
    } else {
      break;
    }
  }
  console.log(total);
  readline.close();
});