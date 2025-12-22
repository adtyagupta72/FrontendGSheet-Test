
const API_URL = "https://script.google.com/macros/s/AKfycbwakjgydb7ZQwMS7s37VLYCHKXmztWhCqmhhbyitgKclIDhaHKpjaCSexq7l5zEPkaeiA/exec";
function create() {
  fetch(`${API_URL}?action=create`, {
    method: "POST",
    body: JSON.stringify(getFormData())
  }).then(() => loadData());
}

function loadData() {
  fetch(`${API_URL}?action=read`)
    .then(res => res.json())
    .then(data => {
      let html = `<tr>
        <th>Name</th><th>Email</th><th>Phone</th><th>Message</th><th>Action</th>
      </tr>`;

      data.forEach(d => {
        html += `
          <tr>
            <td>${d.name}</td>
            <td>${d.email}</td>
            <td>${d.phone}</td>
            <td>${d.message}</td>
            <td>
              <button onclick='edit(${JSON.stringify(d)})'>Edit</button>
              <button onclick='del("${d.id}")'>Delete</button>
            </td>
          </tr>
        `;
      });

      document.getElementById("table").innerHTML = html;
    });
}

function edit(d) {
  document.getElementById("id").value = d.id;
  document.getElementById("name").value = d.name;
  document.getElementById("email").value = d.email;
  document.getElementById("phone").value = d.phone;
  document.getElementById("message").value = d.message;
}

function update() {
  fetch(`${API_URL}?action=update`, {
    method: "POST",
    body: JSON.stringify(getFormData(true))
  }).then(() => loadData());
}

function del(id) {
  fetch(`${API_URL}?action=delete&id=${id}`)
    .then(() => loadData());
}

function getFormData(includeId = false) 
{
  const data = 
  {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value
  };

  if (includeId) data.id = id.value;
  return data;
}

loadData();


  //   document
  //     .getElementById("loadDataBtn")
  //     .addEventListener("click", () => {
  //       fetch("/.netlify/functions/getSheetData")
  //         .then(res => res.json())
  //         .then(data => {
  //           gotTheData(data);
  //         })
  //         .catch(err => {
  //           console.error(err);
  //           alert("Failed to load data");
  //         });
  //     });

  // function gotTheData(data) {
  //   console.log("data:", data)
  // }