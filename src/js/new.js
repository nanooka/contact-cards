const backdrop = document.getElementById("backdrop");
const addContactButton = document.querySelector("section button");
const addNewContact = document.getElementById("add-modal");
const cancelButton = addNewContact.querySelector(".cancel");
const addButton = addNewContact.querySelector(".add");
const userInputs = addNewContact.querySelectorAll("input");

const contacts = [];

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const showContactModal = () => {
  addNewContact.classList.add("visible");
  toggleBackdrop();
};

const closeContactModal = () => {
  addNewContact.classList.remove("visible");
  toggleBackdrop();
};

const backdropClickHandler = () => {
  closeContactModal();
  clearContactInput();
};

const clearContactInput = () => {
  for (const usrInput of userInputs) {
    usrInput.value = "";
  }
};

const cancelAddContactHandler = () => {
  closeContactModal();
  clearContactInput();
};

// const nameValue = userInputs[0].value;
// const numberValue = userInputs[1].value;
// const emailValue = userInputs[2].value;
// const imageUrlValue = userInputs[3].value;

// if (nameValue.trim() === "" || numberValue.trim() === "") {
//   alert("Please fill the gaps");
// }

// const newContact = {
//   name: nameValue,
//   number: numberValue,
//   email: emailValue,
//   // image: imageUrlValue,
// };
let newContact;

const addContactHandler = () => {
  const nameValue = userInputs[0].value;
  const numberValue = userInputs[1].value;
  const emailValue = userInputs[2].value;
  // const imageUrlValue = userInputs[3].value;

  if (nameValue.trim() === "" || numberValue.trim() === "") {
    alert("Please fill the gaps");
    return; // Exit the function if required fields are not filled
  }
  newContact = {
    name: nameValue,
    number: numberValue,
    email: emailValue,
    // image: imageUrlValue,
  };
  console.log(newContact);

  // Send a POST request to your back-end API endpoint
};
fetch("http://localhost:3001/add_contact", {
  method: "POST",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify(newContact),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Contact added:", data);
    closeContactModal();
    clearContactInput();
  })
  .catch((error) => {
    console.error("Error adding contact:", error);
    // Handle errors, e.g., display an error message to the user
  });

// async function addContactHandler() {
//   try {
//     const result = await axios.get("http://localhost:3001/contacts");
//     console.log("es aris mongodan wamosuli data ", result.data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function addContactHandler() {
//   // fetch("http://localhost:3001/contacts", {
//   //   method: "POST",
//   //   headers: {
//   //     "Content-type": "application/json",
//   //   },
//   //   body: JSON.stringify(newContact),
//   // });
//   const contactData = {
//     name: "John Doe",
//     email: "johndoe@example.com",
//     // Other contact fields
//   };

//   fetch("http://localhost:3001/contacts", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(contactData),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Contact card created:", data);
//       // Perform any necessary actions after creating the card
//     })
//     .catch((error) => {
//       console.error("Error creating contact card:", error);
//     });
// }

// console.log("This Is New Contact", newContact);

closeContactModal();
clearContactInput();

// renderNewContactElement(
//   newContact.id,
//   newContact.name,
//   newContact.number,
//   newContact.email,
//   newContact.image
// );

addContactButton.addEventListener("click", showContactModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelButton.addEventListener("click", cancelAddContactHandler);
addButton.addEventListener("click", addContactHandler);

// const deleting = (contactId) => {
//   let contactIndex = 0;
//   for (const contact of contacts) {
//     if (contact.id === contactId) {
//       break;
//     }
//     contactIndex++;
//   }
//   contacts.splice(contactIndex, 1);
//   const listRoot = document.getElementById("contact-list");
//   listRoot.children[contactIndex].remove();
// };

// const renderNewContactElement = (id, name, number, email, image) => {
//   const newContactElement = document.createElement("li");
//   newContactElement.className = "contact-element";
//   newContactElement.innerHTML = `
//     <div>
//         <img src="${image}" alt="photo of ${name}" class="contact-element__image">
//     </div>
//     <div class="contact-element__info">
//         <h2>${name}</h2>
//         <p>${number}</p>
//         <p>${email}</p>
//     </div>
//     `;

// const listRoot = document.getElementById("contact-list");
// listRoot.append(newContactElement);

// edit
// const editButton = document.createElement("button");
// editButton.className = "btn edit-button";
// editButton.textContent = "Edit";
// editButton.addEventListener("click", editing.bind(null, id));
// newContactElement.append(editButton);

// delete

// const deleteButton = document.createElement("button");
// deleteButton.className = "btn delete-button";
// deleteButton.textContent = "Delete";
// deleteButton.addEventListener("click", deleting.bind(null, id));
// newContactElement.append(deleteButton);
// };

// const editing = (contactId) => {
//   let contactIndex = 0;
//   for (const contact of contacts) {
//     if (contact.id === contactId) {
//       break;
//     }
//     contactIndex++;
//   }
//   contacts.splice(contactIndex, 1);
//   const listRoot = document.getElementById("contact-list");
//   // listRoot.children[contactIndex].remove();

//   const email = document.getElementById("email");
//   showContactModal();
//   userInputs[0].value =
//     listRoot.children[contactIndex].children[1].children[0].textContent;

//   userInputs[1].value =
//     listRoot.children[contactIndex].children[1].children[1].textContent;

//   userInputs[2].value =
//     listRoot.children[contactIndex].children[1].children[2].textContent;

//   const imageValue = document.querySelector(".contact-element__image");
//   userInputs[3].value = imageValue.getAttribute("src");

//   console.log(listRoot.children[contactIndex].innerHTML);
//   listRoot.children[contactIndex].remove();
// };
