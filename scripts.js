let cardCounter = 1;

const addBtn = document.querySelector(".add-btn");
const submit = document.getElementById("submit");
// const info = document.getElementById("info");
const info = document.querySelector(".formDiv");
const container = document.querySelector(".container");

const form = document
  .getElementById("newFormSomething")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    gikeqsa({
      name: event.target.name.value,
      number: event.target.number.value,
      email: event.target.email.value,
    });

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

    const deleteBtn = document.querySelectorAll(".delete");
    deleteBtn.forEach((button) => {
      button.addEventListener("click", () => {
        console.log("????????", this.parentNode);
      });
    });
  });

function givi() {
  console.log("clicked submit");
  return form;
}

/*

1) add new object to cards, use fake image url for now           +
2) while adding new object, add ID for them                      +

2) delete button should be delete element from cards array
3) edit button should be edit element from cards array
*/

const cards = [
  {
    img: "https://img.freepik.com/premium-vector/young-girl-anime-style-character-vector-illustration-design-manga-anime-girl-hair-faces-cartoon_147933-1139.jpg",
    name: "Name",
    phone: "123456789",
    email: "asd123@gmail.com",
    id: 0,
  },
  {
    img: "https://img.freepik.com/premium-vector/young-girl-anime-style-character-vector-illustration-design-manga-anime-girl-hair-faces-cartoon_147933-1139.jpg",
    name: "Nanuka",
    phone: "321123",
    email: "qweqwe@gmail.com",
    id: 1,
  },
  {
    img: "https://img.freepik.com/premium-vector/young-girl-anime-style-character-vector-illustration-design-manga-anime-girl-hair-faces-cartoon_147933-1139.jpg",
    name: "Nino",
    phone: "9999999",
    email: "dfgfg2@gmail.com",
    id: 2,
  },
];

const postMethods = () => {
  cards.map((postData) => {
    const postElement = document.createElement("div");
    postElement.classList.add("card");
    postElement.innerHTML = `
    <img
          class="photo"
          src="${postData.img}"
          alt="photo"
        />
        <div class="contact">
          <h2>${postData.name}</h2>
          <p>${postData.phone}</p>
          <p>${postData.email}</p>
        </div>
        <div class="del-edit">
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </div>
    `;
    container.appendChild(postElement);
  });
};
postMethods();

function gikeqsa(param1) {
  let pp = {
    ...param1,
    id: cards.length,
    img: "https://img.freepik.com/premium-vector/young-girl-anime-style-character-vector-illustration-design-manga-anime-girl-hair-faces-cartoon_147933-1139.jpg",
  };

  cards.push(pp);

  console.log("gikeqsashi vart", cards);
}

addBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addBtn.classList.add("hide");
  // ??????????????????????????
  // info.classList.add("visible");
  // form.classList.add("visible");
});
