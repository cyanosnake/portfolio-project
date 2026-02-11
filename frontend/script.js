// Listen for form submission
document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent page reload

  // Get values from the form
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  try {
    // Send POST request to backend
    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    alert(result.message); // Show confirmation
    document.getElementById("contactForm").reset(); // Clear form
  } catch (error) {
    alert("Error sending message");
    console.error(error);
  }
});
