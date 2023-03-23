const form = document.getElementById("form");
const tableBody = document.getElementById("tableBody");

const renderRow = function (name, date, gender, phone, grade) {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${name}</td>
  <td>${date}</td>
  <td>${gender}</td>
  <td>${phone}</td>
  <td>${grade}</td>`;
  tableBody.appendChild(row);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fullName = e.target.fullName.value;
  const dateOfBirth = e.target.dateOfBirth.value;
  const gender = e.target.gender.value;
  const phone = e.target.phone.value;
  const grade = e.target.grade.value;

  renderRow(fullName, dateOfBirth, gender, phone, grade);
});
