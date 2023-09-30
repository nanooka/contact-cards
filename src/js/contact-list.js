// import "../styles/reset.css";
// import "../styles/styles.css";
// import "../styles/main.css";
// import "../styles/new.css";

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
