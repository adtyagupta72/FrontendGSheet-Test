    

    document
    .getElementById("loadDataBtn")
    .addEventListener("click", () => {
      fetch("/.netlify/functions/getSheetData")
        .then(res => res.json())
        .then(data => {
          renderTable(data);
        })
        .catch(err => {
          console.error(err);
          alert("Failed to load data");
        });
    });

  function renderTable(data) {
    if (!data.length) {
      document.getElementById("sheetData").innerHTML =
        "<p>No data found</p>";
      return;
    }

    let table = "<table border='1'><tr>";

    Object.keys(data[0]).forEach(key => {
      table += `<th>${key}</th>`;
    });

    table += "</tr>";

    data.forEach(row => {
      table += "<tr>";
      Object.values(row).forEach(val => {
        table += `<td>${val}</td>`;
      });
      table += "</tr>";
    });

    table += "</table>";

    document.getElementById("sheetData").innerHTML = table;
  }