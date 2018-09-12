// var h = document.head;
// console.log(h);
//
// var b = document.body;
// console.log(b);
//
//
// if (document.body.nodeType === document.ELEMENT_NODE) {
//   console.log("Body est un noeud élément");
// }else {
//   console.log("Body est un noeud textuel");
// }
//
// console.log(document.body.childNodes[1]);
//
// for (var i = 0; i < document.body.childNodes.length; i++) {
//     console.log(document.body.childNodes[i]);
// }
//
// var h1 = document.body.childNodes[1];
// console.log(h1.parentNode);/*

// Modification du contenu HTML de la liste : ajout d'un langage

// document.getElementById("langages").innerHTML = "";
document.querySelector("h1").textContent += " de programmation";

var titreElt = document.querySelector("h1"); // Accès au premier titre h1

titreElt.classList.remove("debut"); // Suppression de la classe "debut"

titreElt.classList.add("titre"); // Ajout de la classe "titre"

console.log(titreElt)
