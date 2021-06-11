let contact = {};
let contacts = [];

const form = document.getElementById("formContact");

const profileImage = document.querySelector("#profile-image");
const addContact = document.querySelector("#addContact");
const contactList = document.querySelector(".contact-list");
const message = document.querySelector(".message");

const createContact = (nom, prenom, groupe, bio, profile) => {
  contact = {
    nom: nom.value,
    prenom: prenom.value,
    groupe: groupe.value,
    bio: bio.value,
    profile: URL.createObjectURL(profile.files[0]),
  };
};

profile.addEventListener("change", (e) => {
  let url = URL.createObjectURL(event.target.files[0]);
  profileImage.setAttribute("src", url);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nom = document.getElementById("nom");
  const prenom = document.getElementById("prenom");
  const groupe = document.getElementById("groupe");
  const bio = document.getElementById("prenom");
  const profile = document.querySelector("#profile");

  createContact(nom, prenom, groupe, bio, profile);

  if (!contact.nom || !contact.prenom || !contact.groupe || !contact.bio) {
    message.textContent = "vous devez remplir tous les champs";
    message.classList.remove("hidden");
  } else {
    createCard(contact);
  }
});

const createCard = (data) => {
  console.log(data);
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
  } else {
    profileImage.setAttribute("src", data.profile);
  }

  iconTrash.addEventListener("click", (e) => {
    e.preventDefault();
    let cardItem = e.target.parentNode.parentNode.parentNode;
    cardItem.remove();
    console.log(cardItem);
  });
};
