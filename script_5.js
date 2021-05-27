const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")


let numberRented = []
books.forEach(books => {
  numberRented.push(books.rented);

})
console.log(numberRented)

if (numberRented.indexOf(0) != -1){
  console.log("Pas tous les livres n'ont été empruntés");
}
else {
  console.log("Tous les livres ont été emprunté");
}

console.log("\n Quel est livre le plus emprunté ?")
var largest = numberRented[0];

for (var i = 0; i < numberRented.length; i++) {
    if (largest < numberRented[i] ) {
        largest = numberRented[i];
    }
}
let largestRentedBook = books.find(x=>x.rented === largest);

console.log(`Le livre le plus emprunté est ${largestRentedBook.title}`);

console.log("\n Quel est le livre le moins emprunté ?")

var less =numberRented[0];

for (var i = 0; i < numberRented.length; i++) {
  if (less > numberRented[i] ) {
      less = numberRented[i];
  }
}
let lessRentedBook = books.find(x=>x.rented === less);

console.log(`Le livre le plus emprunté est ${lessRentedBook.title}`);

console.log("\n Trouve le livre avec l'ID: 873495 ");
console.log("Le livre qui a pour Id 873495 est " + books.find(x=>x.id === 873495).title)

console.log("\n Supprime le livre avec l'ID: 133712");

for(var i = 0; i<books.length; i++){
  if (books[i].id === 133712){
    books.splice(i,1);
  }
}
console.log(books)

console.log("\n Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).");

let sortedBooksTitle = books.sort(function(a,b){
  return a.title.localeCompare(b.title);
})
console.log(sortedBooksTitle);