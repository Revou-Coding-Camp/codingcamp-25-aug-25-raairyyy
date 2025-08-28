document.getElementById("belajarForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const tgl = document.getElementById("tgl").value;
  const gender = document.querySelector("input[name='gender']:checked").value;
  const pesan = document.getElementById("pesan").value;

  const table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
  const row = table.insertRow();

  row.innerHTML = `
    <td>${nama}</td>
    <td>${new Date(tgl).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</td>
    <td>${gender}</td>
    <td>${pesan}</td>
    <td><a href="#">Klik Disini</a></td>
    <td class="delete-btn">🗑️</td>
  `;

  // reset form
  this.reset();
});

// delete row
document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});
