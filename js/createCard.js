import deleteCard from "./deleteCard.js";

const contactList = document.querySelector(".contact-list");

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
  console.dir(profileImage);
  if (!data.profile) {
    profileImage.setAttribute("src", "/asset/avatar.svg");
  }
};

export default createCard;
