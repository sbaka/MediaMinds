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
const contact2=document.querySelector(".contact-btn2");

contact.addEventListener("click",()=>{
    modal.style.display = "flex";
})

close.addEventListener("click",()=>{
    modal.style.display = "none";
})

contact2.addEventListener("click",()=>{
    modal.style.display = "flex";
})

close.addEventListener("click",()=>{
    modal.style.display = "none";
})
/*-------------------scroll-animation-----------*/


const observer= new IntersectionObserver((entries)=>{
    console.log("sdsds1");
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            entry.target.classList.remove('hidden');
            console.log("sdsds2");
        }else{
            entry.target.classList.remove('show');
            entry.target.classList.add('hidden');
        }

    })
})

const hiddenElements =document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));