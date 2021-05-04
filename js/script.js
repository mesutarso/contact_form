let contact = {};
let contacts = [];

const form = document.getElementById("formContact");
const profile = document.querySelector("#profile");
const addContact = document.querySelector("#addContact");
const contactList = document.querySelector(".contact-list");

form.addEventListener("input", (e) => {
  e.preventDefault();
  contact[e.target.name] = e.target.value;
  contact;
});

addContact.addEventListener("click", (e) => {
  e.preventDefault();
  deleteAllChildOf(contactList);
  contacts = [...contacts, contact];
  contacts.map((contact) => {
    if (!contact.nom || !contact.prenom || !contact.groupe || !contact.bio)
      return;
    else {
      createCard(contact);
    }
  });
  console.log(contacts);
});

const createCard = (data) => {
  const card = document.createElement("div");
  const cardImage = document.createElement("div");
  const cardBody = document.createElement("div");
  const cardBodyText = document.createElement("div");
  const cardBodyIcon = document.createElement("div");
  const profileImage = document.createElement("img");
  const fieldNom = document.createElement("p");
  const fieldPrenom = document.createElement("p");
  const fieldGroupe = document.createElement("p");
  const fieldBiographie = document.createElement("p");
  const iconTrash = document.createElement("i");

  card.classList.add("card");
  cardImage.classList.add("card--image");
  cardBody.classList.add("card--body", "col-9");
  cardBodyText.classList.add("card--body--text", "col-10");
  cardBodyIcon.classList.add("card--body--icon", "col-2");
  iconTrash.classList.add("fas", "fa-trash");

  card.append(cardImage, cardBody);
  cardBody.append(cardBodyText, cardBodyIcon);
  cardBodyText.append(fieldNom, fieldPrenom, fieldGroupe, fieldBiographie);
  cardImage.appendChild(profileImage);
  cardBodyIcon.appendChild(iconTrash);
  contactList.appendChild(card);

  fieldNom.innerText = data.nom;
  fieldPrenom.innerText = data.prenom;
  fieldBiographie.innerText = data.bio;
  fieldGroupe.innerText = data.groupe;

  if (!data.profile) {
    profileImage.setAttribute("src", "/asset/avatar.svg");
  }
  iconTrash.addEventListener("click", (e) => {
    e.preventDefault();
    let cardItem = e.target.parentNode.parentNode.parentNode;
    cardItem.remove();
    console.log(cardItem);
  });
};

function deleteAllChildOf(parent) {
  let child = parent.lastElementChild;
  while (child) {
    parent.removeChild(child);
    child = parent.lastElementChild;
  }
}
