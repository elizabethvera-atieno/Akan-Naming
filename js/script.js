/// Input 
// Year of birth
// Date of birth
// Month of birth
// Gender
///Output 
//Akan name and day born

var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function akan(){
// variables
var yob = document.getElementById("year").value;
var month = document.getElementById("month").value;
var birthDate = document.getElementById("date").value;
var gender = document.getElementById("gender").value;

// alerts
if (month < 1 || month > 12){
    alert("Please enter a valid month, from 1 to 12! ");
}else if(month ===2 && birthDate > 29){
    alert("Please enter a valid date of birth!");
}else if (birthDate<1 || birthDate>31 ){
    alert("Please enter a valid date!");
}










}