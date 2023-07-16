var scrollLinks = document.getElementsByClassName('scroll-link');

for (var i = 0; i < scrollLinks.length; i++) {
    scrollLinks[i].addEventListener('click', function (event) {
        console.log("clicked", i);
        event.preventDefault();
        var targetId = this.getAttribute('data-target');
        var targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
};

const contact = document.querySelector(".contact-btn");
const modal = document.querySelector(".form-modal");
const close = document.querySelector(".close");

contact.addEventListener("click",()=>{
    modal.style.display = "flex";
})
console.log("sdsds");
close.addEventListener("click",()=>{
    modal.style.display = "none";
})