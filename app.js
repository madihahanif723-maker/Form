var fn = document.getElementById("fn");
var fatherName = document.getElementById("father'n");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var cnic = document.getElementById("cnic");
var dob = document.getElementById("dfb");
var profile = document.getElementById("profile");
var resetBtn = document.getElementById("resetBtn");
var submitBtn = document.getElementById("submitBtn");

function output() {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
    <h2>Submitted Data:</h2>
    <p><strong>Full Name:</strong> ${fn.value}</p>
    <p><strong>Father's Name:</strong> ${fatherName.value}</p>
    <p><strong>Email:</strong> ${email.value}</p>
    <p><strong>Phone:</strong> ${phone.value}</p>
    <p><strong>CNIC:</strong> ${cnic.value}</p>
    <p><strong>Date of Birth:</strong> ${dob.value}</p>
  `;
}

function resetForm() {
  fn.value = "";
  fatherName.value = "";
  email.value = "";
  phone.value = "";
  cnic.value = "";
  dob.value = "";
  profile.value = "";
}
function submitForm() {
  output();
  resetForm();
}

