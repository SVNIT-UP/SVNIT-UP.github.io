function learnMore() {
    alert("Learn more about the AMRUT Centre and its initiatives.");
}

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    
    for (let link of navLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Adjust for fixed header
                behavior: 'smooth'
            });
        });
    }
});


// Show Scroll-to-Top Button
window.onscroll = function () {
    const scrollButton = document.querySelector(".scroll-top");
    if (document.documentElement.scrollTop > 200) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

// Smooth Scroll to Top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
