arn = prompt("Entrer le code de l'ARN m");

let arncodons = arn.match(/.{1,3}/g);
console.log(arncodons);

let proteine = []

arncodons.forEach(arncodons => {
  if(arncodons === "UCU" || arncodons === "UCC" || arncodons === "UCA" || arncodons === "UCG" || arncodons === "AGU" || arncodons === "AGC"){
    proteine.push("Sérine")
  }
  else if(arncodons === "CCU" || arncodons === "CCC" || arncodons === "CCA" || arncodons === "CCG") {
    proteine.push("Proline")
  }
  else if(arncodons === "UUA" || arncodons === "UUG"){
    proteine.push("Leucine")
  }
  else if(arncodons === "UUU" || arncodons === "UUC"){
    proteine.push("Phénylalanine")
  }
  else if(arncodons === "CCU" || arncodons === "CGC" || arncodons === "CGA" || arncodons === "CGG" || arncodons === "AGA" || arncodons === "AGG"){
    proteine.push("Arginine")
  }
  else if(arncodons === "UAU" || arncodons === "UAC"){
    proteine.push("Tyrosine")
  }
  else {
    proteine.push("Unknown AA")
  }
});

console.log(proteine)
