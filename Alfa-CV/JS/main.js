// randam reikalingus elementus

let myBtn = document.getElementById("myBtn");
let contactForm = document.forms["contForm"];
let experienceForm = document.forms["experience"];
let educationForm = document.forms["education"];
let skillsForm = document.forms["skills"];
let languagesForm = document.forms["languages"];
let hobbyForm = document.forms["hobby"];
let linksForm = document.forms["links"];
let otherForm = document.forms["other"];

// veiksmai paspaudus mygtuką

myBtn.addEventListener("click", function () {

    // trinam pagrindinį puslapį
    
    let removeAll = document.getElementById("wholePage");
    removeAll.parentNode.removeChild(removeAll);

    // kuriam naują puslapį
    
    document.getElementById("newPage").classList.add("newPage", "mt-5", "mb-5", "container-fluid");
    
    let newLogo = document.createElement("img");
    newLogo.setAttribute("src", "IMG/logo.png");
    document.getElementById("newLogo").appendChild(newLogo);

    let hrLine = document.createElement("hr");
    document.getElementById("hr").appendChild(hrLine);

    // imam duomenis iš formų ir keliam į naują puslapį
    
    for (let i = 0; i < contactForm.length; i++) {
        newContact = document.createElement("p");
        newContact.textContent = contactForm.elements[i].value;
        let parent = document.getElementById("newCon");
        parent.appendChild(newContact);
    }
    let expName = document.createElement("b");
    expName.innerText = "Patirtis";
    document.getElementById("newExp").appendChild(expName);
    for (let i = 0; i < experienceForm.length; i++) {
        let newExperience = document.createElement("p");
        newExperience.textContent = experienceForm.elements[i].value;
        let parent = document.getElementById("newExp");
        parent.appendChild(newExperience);
    }
    eduName = document.createElement("b");
    eduName.innerText = "Išsilavinimas";
    document.getElementById("newEdu").appendChild(eduName);
    for (let i = 0; i < educationForm.length; i++) {
        let newEducation = document.createElement("p");
        newEducation.textContent = educationForm.elements[i].value;
        let parent = document.getElementById("newEdu");
        parent.appendChild(newEducation);
    }
    let sklName = document.createElement("b");
    sklName.innerText = "Savybės/Įgūdžiai";
    document.getElementById("newSkills").appendChild(sklName);
    for (let i = 0; i < skillsForm.length; i++) {
        let newSkills = document.createElement("li");
        newSkills.textContent = skillsForm.elements[i].value;
        let parent = document.getElementById("newSkills");
        parent.appendChild(newSkills);
    }
    let langName = document.createElement("b");
    langName.innerText = "Kalbos";
    document.getElementById("newLang").appendChild(langName);
    for (let i = 0; i < languagesForm.length; i++) {
        let newLanguages = document.createElement("li");
        newLanguages.textContent = languagesForm.elements[i].value;
        let parent = document.getElementById("newLang");
        parent.appendChild(newLanguages);
    }
    let hobbyName = document.createElement("b");
    hobbyName.innerText = "Pomėgiai/Hobis";
    document.getElementById("newHobby").appendChild(hobbyName);
    for (let i = 0; i < hobbyForm.length; i++) {
        let newHobby = document.createElement("li");
        newHobby.textContent = hobbyForm.elements[i].value;
        let parent = document.getElementById("newHobby");
        parent.appendChild(newHobby);
    }
    let linksName = document.createElement("b");
    linksName.innerText = "Nuorodos";
    document.getElementById("newLinks").appendChild(linksName);
    for (let i = 0; i < linksForm.length; i++) {
        let newLinks = document.createElement("li");
        newLinks.textContent = linksForm.elements[i].value;
        let parent = document.getElementById("newLinks");
        parent.appendChild(newLinks);
    }
    let otherName = document.createElement("b");
    otherName.innerText = "Kita info";
    document.getElementById("newOther").appendChild(otherName);
    for (let i = 0; i < otherForm.length; i++) {
        let newOther = document.createElement("p");
        newOther.textContent = otherForm.elements[i].value;
        let parent = document.getElementById("newOther");
        parent.appendChild(newOther);
    }
})
