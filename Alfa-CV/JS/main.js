// finding the elements

const myBtn = document.getElementById("myBtn");
const contactForm = document.forms["contForm"];
const experienceForm = document.forms["experience"];
const educationForm = document.forms["education"];
const skillsForm = document.forms["skills"];
const languagesForm = document.forms["languages"];
const hobbyForm = document.forms["hobby"];
const linksForm = document.forms["links"];
const otherForm = document.forms["other"];

// on click actions
myBtn.addEventListener("click", function () {
  // hiding the main page
  let removeAll = document.getElementById("wholePage");
  removeAll.parentNode.removeChild(removeAll);

  // creating the new page
  document
    .getElementById("newPage")
    .classList.add("newPage", "mt-5", "mb-5", "container-fluid");

  const newLogo = document.createElement("img");
  newLogo.setAttribute("src", "IMG/logo.png");
  document.getElementById("newLogo").appendChild(newLogo);

  const hrLine = document.createElement("hr");
  document.getElementById("hr").appendChild(hrLine);

  // move data from form to the new page

  for (let i = 0; i < contactForm.length; i++) {
    const newContact = document.createElement("p");
    newContact.textContent = contactForm.elements[i].value;
    const parent = document.getElementById("newCon");
    parent.appendChild(newContact);
  }

  const resumeHeaders = (header, id) => {
    const name = document.createElement("b");
    name.innerText = header;
    document.getElementById(id).appendChild(name);
  };

  const receivingData = (formName, id) => {
    for (let i = 0; i < formName.length; i++) {
      pName = document.createElement("p");
      pName.textContent = formName.elements[i].value;
      const parent = document.getElementById(id);
      parent.appendChild(pName);
    }
  };

  resumeHeaders("Experience", "newExp");
  receivingData(experienceForm, "newExp");

  resumeHeaders("Education", "newEdu");
  receivingData(educationForm, "newEdu");

  resumeHeaders("Skills", "newSkills");
  receivingData(skillsForm, "newSkills");

  resumeHeaders("Languages", "newLang");
  receivingData(languagesForm, "newLang");

  resumeHeaders("Hobby", "newHobby");
  receivingData(hobbyForm, "newHobby");

  resumeHeaders("Links", "newLinks");
  receivingData(linksForm, "newLinks");

  resumeHeaders("Other info", "newOther");
  receivingData(otherForm, "newOther");
});
