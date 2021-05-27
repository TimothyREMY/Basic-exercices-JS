let answer = prompt("Entrez une phrase");

let questionMark = answer.slice(-1)

if(questionMark == "?"){
  console.log("Ouais ouais...");
}



else if(answer === answer.toUpperCase() && answer !== ""){
  console.log("Pwa, calme-toi...")
}

else if(answer.includes("Fortnite")) {
  console.log("on s' fait une partie soum-soum ?" )
}

else if(answer === ""){
  console.log("t'es en PLS ?")
}

else
{console.log("balek.")}