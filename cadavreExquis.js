cadavre exquis
***************
var joueur1 = prompt("Quel est ton nom Joueur 1?");
alert("Bienvenue" + " " + joueur1 + "!");
var joueur2 = prompt("Quel est ton nom Joueur 2?");
alert("Bienvenue" + " " + joueur2 + "!");
alert("Cest à" + " " + joueur1 + " " + "de commencer!");
var adjectif = prompt ('Ecris un adjectif, exemple :"jolie"');
alert("C'est autour de" + " " + joueur2);
var nom = prompt('Ecris un nom avec son déterminant, exemple: "Le chien"');
var nomDeterminant = nom.split(" ")[0];
var nomSansDeterminant = nom.split(" ")[1];
alert("C'est autour de" + " " + joueur1);
var verbe = prompt('Ecris un verbe conjugué à la 3eme personne: exemple"mange"');
alert("C'est autour de" + " " + joueur2);
var adjectif2 = prompt('Ecris un nouvel adjectif, exemple :"moche"');
alert("C'est autour de" + " " + joueur1);
var quoi = prompt('Ecris un deuxième nom, toujours avec son déterminant, exemple:"un chat"');
var quoiDeterminant = quoi.split(" ")[0];
var quoiSansDeterminant = quoi.split(" ")[1];
alert("C'est autour de" + " " + joueur2);
var ou = prompt('Ecris un lieu avec son déterminant, exemple : "une chambre"');
alert("C'est autour de" + " " + joueur1);
var adverbe = prompt('Ecris un adverbe, exemple :"lentement"');
var phrase = nomDeterminant + " " + adjectif + " " + nomSansDeterminant + " " + verbe + " " + quoiDeterminant + " " + adjectif2 + " " + quoiSansDeterminant + " " + "dans" + " "  + ou + " " + adverbe + ".";

alert("Clique OK pour dévoiler votre cadavre exquis !");

function majPremiereLettre(phrase){
  return phrase.charAt(0).toUpperCase() + phrase.slice(1);
}
alert(majPremiereLettre(phrase));
