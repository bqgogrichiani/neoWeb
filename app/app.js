let respButton = document.querySelector('.mobile-menu');
let respMenu = document.querySelector('.nav-menu');
let respExitButton = document.querySelector('.exit-menu');

respButton.addEventListener('click', () => {
    respMenu.classList.add('active');
})

respExitButton.addEventListener('click', () => {
    respMenu.classList.remove('active');
})



const careerHeaders = document.querySelectorAll('.career-item-header');

careerHeaders.forEach(careerHeader => {
    careerHeader.addEventListener("click", event => {
        careerHeader.classList.toggle("active");
        const accordionItemBody = careerHeaders.nextElementSibling;
        if (careerHeaders.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});