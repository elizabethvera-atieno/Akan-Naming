/// Input
// Year of birth
// Date of birth
// Month of birth
// Gender
///Output
//Akan name and day born

var form = document.getElementById("submit");
form.addEventListener("click", akan);

function akan() {
  // variables
  var maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  var femaleNames = [
    "Akosua",
    " Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];

  var yob = document.getElementById("year").value;
  var month = document.getElementById("month").value;
  var birthDate = document.getElementById("date").value;
  var gender = document.getElementById("gender").value;
  console.log(gender);
  // alerts for no inputs
  if (yob === "") {
    return alert("Please input year of birth!");
  }
  if (month === "") {
    return alert("Please enter the month of birth!");
  }
  if (birthDate === "") {
    return alert("Please enter the date of birth!");
  }
  if (gender === "select-gender") {
    return alert("Please select gender!");
  }

  // alerts for wrong inputs
  if (month < 1 || month > 12) {
    return alert("Please enter a valid month, from 1 to 12! ");
  } else if (month === 2 && birthDate > 29) {
    return alert("Please enter a valid date of birth!");
  } else if (birthDate < 1 || birthDate > 31) {
    return alert("Please enter a valid date!");
  }

  // date calculation
  let dayOfBirth = new Date(`${yob}-${month}-${birthDate}`);
  //   var dayOfBirth = new Date(`year` + `-` +`month` + `-` + `date`);
  var dateStr = dayOfBirth.toDateString();
  let birthDay = dayOfBirth.getDay();

  // gender
  if (gender === "male") {
    let yourName = maleNames[birthDay];
    let output = document.getElementById("output");
    output.innerHTML =
      "Your were born on " + dateStr + ". Your Akan name is " + yourName + ".";
  } else if (gender === "female") {
    let yourName = femaleNames[birthDay];
    let output = document.getElementById("output");
    output.innerHTML =
      "Your were born on " + dateStr + ". Your Akan name is " + yourName + ".";
  } else {
    let output = document.getElementById("output");
    output.innerHTML = "Please select gender.";
  }
}
