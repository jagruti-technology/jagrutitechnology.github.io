// smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function (e) {

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior: 'smooth'
});

});

});


// contact form confirmation

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(){

alert("Thanks for contacting Jagruti Technology! We will reach out soon.");

});
