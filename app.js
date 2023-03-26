// task 2
const form = document.getElementById("form");
const cardContainer = document.getElementById("cardContainer");
let users = [];

const Student = function (
  fullName,
  dateOfBirth,
  gender,
  major,
  imageURL,
  phoneNumber
) {
  this.fullName = fullName;
  this.dateOfBirth = dateOfBirth;
  this.gender = gender;
  this.major = major;
  this.imageURL = imageURL;
  this.phoneNumber = phoneNumber;
};

const renderStudent = function (
  fullName,
  dateOfBirth,
  gender,
  major,
  imageURL,
  phoneNumber
) {
  const card = document.createElement("div");
  card.setAttribute("class", "flex flex-col");

  card.innerHTML = `<img class="w-52" src="${imageURL}" alt="img">
  <span>full name: ${fullName}</span>
  <span>date of birth: ${dateOfBirth}</span>
  <span>gender: ${gender}</span>
  <span>phone number: ${phoneNumber}</span>
  `;

  cardContainer.appendChild(card);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInfo = {
    username: e.target.fullName.value,
    dateOfBirth: e.target.dateOfBirth.value,
    gender: e.target.gender.value,
    phone: e.target.phone.value,
    major: e.target.majorSelect.value,
    imageURL: e.target.imageURL.value,
  };
  const user = new Student(
    userInfo.username,
    userInfo.dateOfBirth,
    userInfo.gender,
    userInfo.phone,
    userInfo.imageURL,
    userInfo.major
  );
  renderStudent(
    userInfo.username,
    userInfo.dateOfBirth,
    userInfo.gender,
    userInfo.phone,
    userInfo.imageURL,
    userInfo.major
  );

  users.push(userInfo);

  if (!window.localStorage.getItem("users")) {
    window.localStorage.setItem("users", JSON.stringify(users));
    console.log(userInfo, users);
  } else {
    const storageUsers = JSON.parse(window.localStorage.getItem("users"));
    storageUsers.push(users);
    window.localStorage.setItem("users", JSON.stringify(storageUsers));
    console.log(userInfo, users, "1");
  }
});

// task 1
// const tableBody = document.getElementById("tableBody");

// const renderRow = function (name, date, gender, phone, grade) {
//   const row = document.createElement("tr");
//   row.innerHTML = `<td>${name}</td>
//   <td>${date}</td>
//   <td>${gender}</td>
//   <td>${phone}</td>
//   <td>${grade}</td>`;
//   tableBody.appendChild(row);
// };

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const fullName = e.target.fullName.value;
//   const dateOfBirth = e.target.dateOfBirth.value;
//   const gender = e.target.gender.value;
//   const phone = e.target.phone.value;
//   const grade = e.target.grade.value;

//   renderRow(fullName, dateOfBirth, gender, phone, grade);
// });
