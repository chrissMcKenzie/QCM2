//Objet : deux manières de rajouter un attribut :
const obj1 = {
    greeting: "hello" 
}

obj1.popil = "nouvelle propriété"

console.log(obj1)
console.log(obj1.popil)



//Objet : comment boucle-t-on sur un objet ? 
for (const key in obj1) {
        const element = obj1[key];
        console.log(element)
}


//Objet : rajouter deux méthode de 2 manières différentes : 
// obj1.color = ""
// obj1.prototype.color = function (){
//     console.log("bleu");
// }

obj1.methode = function (parameters) {
    
}



//Objet : à partir de l'objet suivant, renvoyez un tableau comportant uniquement les clés de l'objet :
const obj = {
    width: '10px',
    height: '10px',
    color: 'red'
}

let Clé = Object.keys(obj)
console.log(Clé);

//Class : écrivez une class (prenom, nom, age) et instanciez vous !
class Personne{
    constructor(prenom, nom, age){
        this.prenom = prenom
        this.nom = nom
        this.age = age
    }
}

let Élève = new Personne("Jeaffy", "Bambi", 23)
console.log(Élève);

//Ecrivez une sous-classe (possible de réutiliser la classe ci dessus)
class Eleve extends Personne{
    constructor(prenom, nom, age){
        super(prenom, nom, age)
        this.prenom = prenom
        this.nom = nom
        this.age = age
    }
}


//Les 4 cas où la console renvoie undefined 
console.log(undefined)
let pinri
console.log(pinri)