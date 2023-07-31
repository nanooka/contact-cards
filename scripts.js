let cardCounter = 1;

const inputName = document.getElementById("name");
const inputNumber = document.getElementById("number");
const inputEmail = document.getElementById("email");

const editingName = document.getElementById("editing-name");
const editingNumber = document.getElementById("editing-number");
const editingEmail = document.getElementById("editing-email");
const editingSubmit = document.querySelector(".editing-submit");

const addBtn = document.querySelector(".add-btn");
const submit = document.getElementById("submit");

const info = document.querySelector(".formDiv");
const container = document.querySelector(".container");

// const editingCard = document.querySelector("editing-card");

const form = document
  .getElementById("newFormSomething")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    // push new element in array
    gikeqsa({
      name: event.target.name.value,
      number: event.target.number.value,
      email: event.target.email.value,
    });

    // add new card
    let newCardDiv = document.createElement("div");
    newCardDiv.classList.add("card");
    newCardDiv.innerHTML = `
    <img class="photo" src="https://img.freepik.com/premium-vector/young-girl-anime-style-character-vector-illustration-design-manga-anime-girl-hair-faces-cartoon_147933-1139.jpg" alt="photo">
    <div class="contact">
          <h2>${event.target.name.value}</h2>
          <p>${event.target.number.value}</p>
          <p>${event.target.email.value}</p>
        </div>
        <div class="del-edit">
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </div>
    `;

    container.appendChild(newCardDiv);

    // delete
    const deleteBtn = document.querySelectorAll(".delete");
    deleteBtn.forEach((button) => {
      button.addEventListener("click", () => {
        // console.log(button.parentElement.parentElement, cards.id);
        button.parentElement.parentElement.remove();
      });
    });

    // edit
    // const cardPlus = document.querySelector("card-plus");

    const editingCard = document.querySelector(".editing-card");
    const editBtn = document.querySelectorAll(".edit");
    editBtn.forEach((button) => {
      button.addEventListener("click", () => {
        // button.parentElement.parentElement.innerHTML = "";
        button.parentElement.parentElement.remove();

        console.log(button.parentElement.parentElement, "edited");
        editingCard.classList.remove("hide");
        editingCard.classList.add(".visible");

        editingName.value = inputName.value;
        editingNumber.value = inputNumber.value;
        editingEmail.value = inputEmail.value;

        editingSubmit.addEventListener("click", (event) => {
          event.preventDefault();
          console.log("submiteddddd");
          let newCardDiv = document.createElement("div");
          newCardDiv.classList.add("card");
          newCardDiv.innerHTML = `
          <img class="photo" src="https://img.freepik.com/premium-vector/young-girl-anime-style-character-vector-illustration-design-manga-anime-girl-hair-faces-cartoon_147933-1139.jpg" alt="photo">
          <div class="contact">
            <h2>${editingName.value}</h2>
            <p>${editingNumber.value}</p>
            <p>${editingEmail.value}</p>
          </div>
          <div class="del-edit">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
          </div>
          `;
          container.appendChild(newCardDiv);
          // console.log(newCardDiv);
          editingCard.classList.add("hide");
        });
      });
    });
  });

function givi() {
  console.log("clicked submit");
  return form;
}

const cards = [];
// const cards = [
//   {
//     img: "https://img.freepik.com/premium-vector/young-girl-anime-style-character-vector-illustration-design-manga-anime-girl-hair-faces-cartoon_147933-1139.jpg",
//     name: "Name",
//     phone: "123456789",
//     email: "asd123@gmail.com",
//     id: 0,
//   },
//   {
//     img: "https://img.freepik.com/premium-vector/young-girl-anime-style-character-vector-illustration-design-manga-anime-girl-hair-faces-cartoon_147933-1139.jpg",
//     name: "Nanuka",
//     phone: "321123",
//     email: "qweqwe@gmail.com",
//     id: 1,
//   },
//   {
//     img: "https://img.freepik.com/premium-vector/young-girl-anime-style-character-vector-illustration-design-manga-anime-girl-hair-faces-cartoon_147933-1139.jpg",
//     name: "Nino",
//     phone: "9999999",
//     email: "dfgfg2@gmail.com",
//     id: 2,
//   },
// ];

function gikeqsa(param1) {
  let pp = {
    ...param1,
    id: cards.length,
    img: "https://img.freepik.com/premium-vector/young-girl-anime-style-character-vector-illustration-design-manga-anime-girl-hair-faces-cartoon_147933-1139.jpg",
  };

  cards.push(pp);

  console.log("gikeqsashi vart", cards);
  info.classList.remove("visible");
  info.classList.add("formDiv");
  addBtn.classList.remove("hide");
}

addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  inputName.value = "";
  inputNumber.value = "";
  inputEmail.value = "";
  addBtn.classList.add("hide");
  info.classList.remove("formDiv");
  info.classList.add("visible");
});

// video 29

//TODO:

// 1. edit: when I click edit, certain card should change its class to cardPlus, with inputed values that had before, change and submited again
// or: I should have some card hidden in html and when I click edit, delete certain card and add class visible for that html card, overlay or smth like that.
// 2. uploading phosot available
