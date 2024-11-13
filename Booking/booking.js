
  function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const address = document.getElementById("address").value;
    const houseNo = document.getElementById("house_no").value;
    const landmark = document.getElementById("landmark").value;
    const pincode = document.getElementById("pincode").value;
    const timing = document.getElementById("timing").value;
    const date = document.getElementById("date").value;
    const services = Array.from(document.querySelectorAll('input[name="service"]:checked'))
      .map(service => service.value)
      .join(", ");

    const templateParams = {
      name,
      email,
      contact,
      address,
      houseNo,
      landmark,
      pincode,
      timing,
      date,
      services
    };

    emailjs.send("service_csm3rzx", "template_ewbzjs6", templateParams)
      .then(function(response) {
        alert("Your request has been sent successfully!");
      }, function(error) {
        alert("An error occurred. Please try again.");
      });
  }

  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    sendEmail(); // Call the sendEmail function to send the email
  });

