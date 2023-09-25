const addButton = document.querySelector(".btn.add");
addButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the input values
  const name = document.getElementById("name").value;
  const phone_number = document.getElementById("number").value;
  const email = document.getElementById("email").value;

  // Create an object with the data to send
  const data = {
    name: name,
    phone_number: phone_number,
    email: email,
  };

  // Send a POST request to the API
  fetch("http://localhost:3005/add_contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // Convert data to JSON format
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then((responseData) => {
      // Handle the response data, e.g., display a success message
      console.log("Contact added successfully:", responseData);

      // You can also reset the form or perform other actions as needed
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
});
