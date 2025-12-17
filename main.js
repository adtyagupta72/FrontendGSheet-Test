const scriptURL = "https://script.google.com/macros/library/d/1zp9SncpOY9-XpM5U6hqfopcsWEnPiFNQ72Hq4UnmcmgvDzkhvDJlcoQz/2"

document.getElementById("contactForm").addEventListener("submit", function(e)
{
    e.preventDefault()
    console.log("Form Submitted!")

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    }
    console.log("Data:", data)

    fetch(scriptURL, {
      method: "POST",
      body: data
    })
    .then(res => res.text())
    .then(result => {
      alert("Form submitted successfully!");
      form.reset();
    })
    .catch(err => {
      console.error("Error!", err);
      alert("Submission failed");
    });

})