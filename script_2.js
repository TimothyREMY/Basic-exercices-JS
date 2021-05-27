let numberToCalculate = prompt("De quel nombre veux-tu calculer la factorielle ?");
function factorial(numberToCalculate){
  let n = 1;
    while(numberToCalculate > 0){
      n = numberToCalculate * n;
      numberToCalculate -= 1;
    }
  return n;
}

console.log(factorial(numberToCalculate));