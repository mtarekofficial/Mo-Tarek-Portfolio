//..................................................Begin Contact..................................................
var getnameup = document.getElementById("ContactName");
var getemailup = document.getElementById("ContactEmail");
var getsubjectup = document.getElementById("ContactSubject");
var gettextareaup = document.getElementById("ContactTextArea");
var usersup = JSON.parse(localStorage.getItem('usersup')) || [];

function SendContact() {
    var userinformationup = {
        name: getnameup.value,
        email: getemailup.value,
    };

    if (getnameup.value == "") {
        alert("Please enter your name...");
    } else if (getnameup.value.length < 10) {
        alert("Your Name is less than 10 characters...");
    } else if (getnameup.value.length > 30) {
        alert("Your Name is more than 30 characters...");
    } else if (getemailup.value == "") {
        alert("Please enter your email...");
    } else if (!getemailup.value.match(/^[a-z]{4,20}[0-9]{0,9}(@gmail.com|@icloud.com|@hotmail.com|@yahoo.com|@outlook.com)$/)) {
        alert("There is a problem with your email...");
    } else if (getsubjectup.value == "Select Your Poject Type...") {
        alert("Please enter your Subject...");
    } else {
            alert(`Done. Thanks ` + getnameup.value);
            userinformationup.clientName = getnameup.value;
            usersup.push(userinformationup);
            localStorage.setItem('usersup', JSON.stringify(usersup));
            clearValueup();
            localStorage.setItem('loggedInUser', JSON.stringify(userinformationup));
        
    }
}

function clearValueup() {
    getnameup.value = "";
    getemailup.value = "";
    getsubjectup.value = "";
    gettextareaup.value = "";
}







// script.js

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.remove('navbar-dark-theme');
        navbar.classList.add('navbar-light-theme');
    } else {
        navbar.classList.remove('navbar-light-theme');
        navbar.classList.add('navbar-dark-theme');
    }
});

// Initialize with dark theme
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.add('navbar-dark-theme');
});


let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        navbar.style.top = '-100px'; // Hide the navbar by moving it out of view
    } else {
        // Scrolling up
        navbar.style.top = '0'; // Show the navbar
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
