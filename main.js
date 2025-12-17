let submitted = false;
  function onSuccess() {
    alert("Form submitted successfully!");
    submitted = false;
  }
// const scriptURL = "https://script.google.com/macros/s/AKfycbwakjgydb7ZQwMS7s37VLYCHKXmztWhCqmhhbyitgKclIDhaHKpjaCSexq7l5zEPkaeiA/exec"

// document.getElementById("contactForm").addEventListener("submit", function(e)
// {
//     e.preventDefault()
//     console.log("Form Submitted!")

//     const data = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         phone: document.getElementById("phone").value,
//         message: document.getElementById("message").value
//     }
//     console.log("Data:", data)

//     fetch(scriptURL, {
//       method: "POST",
//       body: data
//     })
//     .then(res => res.text())
//     .then(result => {
//       alert("Form submitted successfully!");
//       form.reset();
//     })
//     .catch(err => {
//       console.error("Error!", err);
//       alert("Submission failed");
//     });

// })