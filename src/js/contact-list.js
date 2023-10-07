console.log("this is contact-list.js below");
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
      let num = 0;
      const card = document.createElement("div");
      card.classList.add("contact-list-element");

      const cardContent = `
        <h2>${contact.name}</h2>
        <p>${contact.phone_number}</p>
        <p>${contact.email}</p>
        <img class="image" src="${
          "http://localhost:3005/" + contact.image
        }" alt="image of ${contact.name}">
      `;

      // <img src="data:image/jpeg;base64,${btoa(
      //   String.fromCharCode.apply(null, new Uint8Array(contact.image))
      // )}" />
      card.innerHTML = cardContent;
      contactContainer.appendChild(card);
      num++;
    });
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
