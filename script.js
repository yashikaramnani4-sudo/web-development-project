document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value;

if(name.length < 3){
alert("Name must contain at least 3 characters");
return;
}

alert("Form Submitted Successfully!");

});
