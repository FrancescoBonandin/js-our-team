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

let row = document.createElement("div");
row.classList.add("row", "row-cols-3","align-items-start", "justify-content-between", "mb-3", "g-3");
container.append(row);

let index = 0;

while ( index < teamList.length) {
    console.log(teamList[index]);


    let newbox = document.createElement("div");
    newbox.classList.add("card", "col-auto","p-2","border-0", "rounded-0");
    row.append(newbox);


    for (const key in teamList[index]) {

        console.log(key,teamList[index][key]);

        if(key === "img"){

            let newImg = document.createElement("img");
            newImg.setAttribute("src",`${teamList[index][key]}`)
            newImg.classList.add("card-img-top","rounded-0")
            newbox.prepend(newImg)

        }

        else{

            let newKeyValueDiv = document.createElement("div");
            newbox.append(newKeyValueDiv);
            const capitalKey = capitalize(key)
            newKeyValueDiv.append(`${capitalKey}: ${teamList[index][key]}`)

        }

    }
    index++; 
}

const addTeamMember = document.getElementById("add-team-member");

addTeamMember.addEventListener("submit",function(event){
    
    event.preventDefault()
    
    const newTeamMemberName = document.getElementById("name").value;
    const newTeamMemberRole = document.getElementById("role").value;
    const newTeamMemberImg = document.getElementById("image").value;

    const newMember = {
        name:null,
        role:null,
        img:null
    }

    for (const key in newMember) {

      if(key == "name") newMember[key] = newTeamMemberName;

      else if(key == "role") newMember[key] = newTeamMemberRole;

      else if (key == "img") newMember[key] = newTeamMemberImg;
      
    }

    teamList.push(newMember);

   
    while ( index < teamList.length) {
    console.log(teamList[index]);


        let newbox = document.createElement("div");
        newbox.classList.add("card", "col-auto","p-2","border-0", "rounded-0");
        row.append(newbox);


        for (const key in teamList[index]) {

            console.log(key,teamList[index][key]);

            if(key === "img"){

                let newImg = document.createElement("img");
                newImg.setAttribute("src",`${teamList[index][key]}`)
                newImg.classList.add("card-img-top","rounded-0")
                newbox.prepend(newImg)

            }

            else{

                let newKeyValueDiv = document.createElement("div");
                newbox.append(newKeyValueDiv);
                const capitalKey = capitalize(key)
                newKeyValueDiv.append(`${capitalKey}: ${teamList[index][key]}`)

            }

        }

        index++; 
        
    }

})







// ---FUNCTIONS----

function capitalize(word){
    
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    return capitalizedWord;

}