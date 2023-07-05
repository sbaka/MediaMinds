// https://colorlib.com/preview/theme/seogo/

const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");
buttonsWrapper.addEventListener("click", e => {
    // Listen for a click event on 'buttonsWrapper'
    if (e.target.nodeName === "BUTTON") {
        // If the clicked element is a 'BUTTON'
        Array.from(buttonsWrapper.children).forEach(item =>
            item.classList.remove("active")
        );
        // Remove the 'active' class from all child elements of 'buttonsWrapper'
        if (e.target.classList.contains("first")) {
            // If the clicked button has class 'first'
            slides.style.transform = "translateX(-0%)";
            // Set the 'transform' property of 'slides' to 'translateX(-0%)'
            e.target.classList.add("active");
            // Add the 'active' class to the clicked button
        } else if (e.target.classList.contains("second")) {
            // If the clicked button has class 'second'
            slides.style.transform = "translateX(-33.33333333333333%)";
            // Set the 'transform' property of 'slides' to 'translateX(-33.33333333333333%)'
            e.target.classList.add("active");
            // Add the 'active' class to the clicked button
        } else if (e.target.classList.contains('third')) {
            // If the clicked button has class 'third'
            slides.style.transform = 'translatex(-66.6666666667%)';
            // Set the 'transform' property of 'slides' to 'translateX(-66.6666666667%)'
            e.target.classList.add('active');
            // Add the 'active' class to the clicked button
        }
    }
});
