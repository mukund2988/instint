function validateForm() {
    const name = document.getElementById('name').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const address = document.getElementById('address').value.trim();
    const houseNo = document.getElementById('house_no').value.trim();
    const landmark = document.getElementById('landmark').value.trim();
    const pincode = document.getElementById('pincode').value.trim();
    const timing = document.getElementById('timing').value;
    const date = document.getElementById('date').value;
    const services = Array.from(document.querySelectorAll('input[name="service"]:checked')).map(service => service.value);

    const pincodePattern = /^[0-9]{6}$/;
    const contactPattern = /^[0-9]{10}$/;

    if (!name || !contact || !address || !houseNo || !landmark || !pincode || !timing || !date || services.length === 0) {
      alert("Please fill all required fields.");
      return false;
    }

    if (!contactPattern.test(contact)) {
      alert("Please enter a valid 10-digit contact number.");
      return false;
    }

    if (!pincodePattern.test(pincode)) {
      alert("Please enter a valid 6-digit pincode.");
      return false;
    }

    alert("Form submitted successfully!");
    // Proceed with form submission
  }