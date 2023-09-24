// const backdrop = document.getElementById("backdrop");
// const addContactButton = document.querySelector("section button");
// const addNewContact = document.getElementById("add-modal");
// const cancelButton = addNewContact.querySelector(".cancel");
// const addButton = addNewContact.querySelector(".add");
// const userInputs = addNewContact.querySelectorAll("input");

// const toggleBackdrop = () => {
//   backdrop.classList.toggle("visible");
// };

// const showContactModal = () => {
//   addNewContact.classList.add("visible");
//   toggleBackdrop();
// };

// const closeContactModal = () => {
//   addNewContact.classList.remove("visible");
//   toggleBackdrop();
// };

// const backdropClickHandler = () => {
//   closeContactModal();
//   clearContactInput();
// };

// const clearContactInput = () => {
//   for (const usrInput of userInputs) {
//     usrInput.value = "";
//   }
// };

// const cancelAddContactHandler = () => {
//   closeContactModal();
//   clearContactInput();
// };

// let newContact;

// const addContactHandler = () => {
//   const nameValue = userInputs[0].value;
//   const numberValue = userInputs[1].value;
//   const emailValue = userInputs[2].value;

//   if (nameValue.trim() === "" || numberValue.trim() === "") {
//     alert("Please fill the gaps");
//     return; // Exit the function if required fields are not filled
//   }
//   newContact = {
//     name: nameValue,
//     number: numberValue,
//     email: emailValue,
//   };
//   console.log(newContact);
// };

// const tytyty = async () => {
//   await fetch("http://localhost:3005/contacts", {
//     method: "GET",
//     mode: "no-cors",
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("Contacts  List:", data);
//     })
//     .catch((error) => {
//       console.error("Error adding contact:", error);
//     });
// };

// console.log(tytyty());

// addContactButton.addEventListener("click", showContactModal);
// backdrop.addEventListener("click", backdropClickHandler);
// cancelButton.addEventListener("click", cancelAddContactHandler);
// addButton.addEventListener("click", addContactHandler);

console.log("here");
fetch("http://localhost:3005/contacts")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const contactContainer = document.getElementById("contact-container");
    // let htmlContent = "";
    data.forEach((contact) => {
      const card = document.createElement("div");
      card.classList.add("contact-list-element");

      const cardContent = `
        <h2>${contact.name}</h2>
        <p>${contact.phone_number}</p>
        <p>${contact.email}</p>
      `;
      card.innerHTML = cardContent;
      contactContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
