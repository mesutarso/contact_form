import createCard from "./createCard.js";

let contact = {};
let contactArray = [];

const form = document.getElementById("formContact");
const profile = document.querySelector("#profile");
const addContact = document.querySelector("#addContact");

form.addEventListener("input", (e) => {
  e.preventDefault();
  contact[e.target.name] = e.target.value;
  console.log(contact);
});

addContact.addEventListener("click", (e) => {
  e.preventDefault();
  contactArray = [...contactArray, contact];
  console.log(contactArray);
  contactArray.map((contact) => {
    if (!contact.nom || !contact.prenom || !contact.groupe || !contact.bio)
      return;
    else {
      createCard(contact);
    }
  });
});
