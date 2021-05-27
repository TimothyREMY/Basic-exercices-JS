let numberToCalculate = prompt("De combien d'étages veux-tu que la pyramide soit ?");
let stage = "#";
let space = " "
for(let count = (0); count <=numberToCalculate; count++){
  let multiStage = stage.repeat(count);
  let numberSpace = numberToCalculate - count
  let multiSpace = space.repeat(numberSpace);
  console.log(multiSpace + multiStage)
}

