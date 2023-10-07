import "../styles/reset.css";
// import "../styles/styles.css";
import "../styles/main.css";
import "../styles/new.css";

import "../pages/contact-list.html";

const addButton = document.querySelector(".btn.add");
addButton.addEventListener("click", async function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the input values
  const name = document.getElementById("name").value;
  const phone_number = document.getElementById("number").value;
  const email = document.getElementById("email").value;
  const image = document.getElementById("image");

  //
  // const reader = new FileReader();
  // const imageValue = reader.result;

  // Create an object with the data to send
  // const data = {
  //   name: name,
  //   phone_number: phone_number,
  //   email: email,
  //   image: imageValue,
  // };

  //
  const imageFile = image.files[0];
  try {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("phone_number", phone_number);
    formData.append("email", email);
    formData.append("image", image.files[0]);
    // formData.append("image", imageValue);
    // console.log(imageValue);

    const response = await fetch("http://localhost:3005/add_contact", {
      method: "POST",
      body: formData, // Send the FormData object
    });
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    const responseData = await response.json();
    console.log("Contact added successfully:", responseData);
  } catch (error) {
    console.error("Error:", error);
  }

  // // Send a POST request to the API
  // fetch("http://localhost:3005/add_contact", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data), // Convert data to JSON format
  // })
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error(`Network response was not ok: ${response.status}`);
  //     }
  //     return response.json();
  //   })
  //   .then((responseData) => {
  //     // Handle the response data, e.g., display a success message
  //     console.log("Contact added succqessfully:", responseData);

  //     // You can also reset the form or perform other actions as needed
  //   })
  //   .catch((error) => {
  //     console.error("Fetch error:", error);
  //   });

  // reader.readAsDataURL(image.files[0]);
});
console.log(typeof image);
