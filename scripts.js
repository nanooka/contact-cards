let cardCounter = 1;
const addBtn = document.querySelector(".add-btn");
const submit = document.getElementById("submit");

const cards = [
  {
    img: "https://img.freepik.com/premium-vector/young-girl-anime-style-character-vector-illustration-design-manga-anime-girl-hair-faces-cartoon_147933-1139.jpg",
    name: "Name",
    phone: "123456789",
    email: "asd123@gmail.com",
  },
  {
    img: "https://img.freepik.com/premium-vector/young-girl-anime-style-character-vector-illustration-design-manga-anime-girl-hair-faces-cartoon_147933-1139.jpg",
    name: "Nanuka",
    phone: "321123",
    email: "qweqwe@gmail.com",
  },
  {
    img: "https://img.freepik.com/premium-vector/young-girl-anime-style-character-vector-illustration-design-manga-anime-girl-hair-faces-cartoon_147933-1139.jpg",
    name: "Nino",
    phone: "9999999",
    email: "dfgfg2@gmail.com",
  },
];

const postContainer = document.querySelector(".container");

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
    postContainer.appendChild(postElement);
  });
};
postMethods();

function addContactCard() {
  const contactContainer = document.getElementById("card");
  addBtn.classList.add("hide");
  const newCardHTML = `
    <form class="info">
      <label for="name">Name</label>
      <input type="text" name="name"  id="name" autocomplete="given-name"/>

      <label for="number">Phone number</label>
      <input type="text" name="number"  id="number"/>

      <label for="email">Email</label>
      <input type="email" name="email"  id="email" autocomplete="off"/>

      <button id="submit">Submit</button>
  </form>
    `;

  contactContainer.insertAdjacentHTML("beforeend", newCardHTML);
  cardCounter++;
}

submit.addEventListener(click, () => {
  console.log("clicked");
});
