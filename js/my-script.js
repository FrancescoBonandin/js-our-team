// 1. creo un array, e lo inizializzo con i membri del team, come oggetti.
// 2. ciclo un for per scorrere l'array e ci annido un for-in per scorrere le chiavi degli oggetti
// 3. creo degli elementi html, e ci stampo le stringhe all'interno;

// BONUS
// 4. carico l' immagine come tale o usando innerHTML oppure (meglio) set attribute di src con template literal
// 5. applico classi bootstrap agli elementi html e creo x card

const teamList = [
    {
        name:"Wayne Barnett",
        role:"Founder & CEO",
        img: "img/wayne-barnett-founder-ceo.jpg"
    },
    
    {
        name:"Angela Carroll",
        role:"Chief Editor",
        img: "img/angela-caroll-chief-editor.jpg"
    },

    {
        name:"Walter Gordon",
        role:"Office Manager",
        img: "img/walter-gordon-office-manager.jpg"
    },

    {
        name:"Angela Lopez",
        role:"Social Media Manager",
        img: "img/angela-lopez-social-media-manager.jpg"
    },

    {
        name:"Scott Estrada",
        role:"Developer",
        img: "img/scott-estrada-developer.jpg"
    },

    {
        name:"Barbara Ramos",
        role:"Graphic Designer",
        img: "img/barbara-ramos-graphic-designer.jpg"
    }
    
        
]

const container = document.querySelector(".container");

for (let index = 0; index < teamList.length; index++) {
    console.log(teamList[index]);
    let newbox = document.createElement("div");
    container.append(newbox);


    for (const key in teamList[index]) {
        console.log(key,teamList[index][key]);
        let newKeyValueDiv = document.createElement("div");
        newbox.append(newKeyValueDiv);
        const capitalKey = capitalize(key)
        newKeyValueDiv.append(`${capitalKey}: ${teamList[index][key]}`)

    }
    
}








// ---FUNCTIONS----

function capitalize(word){
    
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    return capitalizedWord;

}