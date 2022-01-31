let respButton = document.querySelector('.mobile-menu');
let respMenu = document.querySelector('.nav-menu');
let respExitButton = document.querySelector('.exit-menu');

respButton.addEventListener('click', () => {
    respMenu.classList.add('active');
})

respExitButton.addEventListener('click', () => {
    respMenu.classList.remove('active');
})



const careerItemHeaders = document.querySelectorAll('.career-item-header');

careerItemHeaders.forEach(careerItemHeader => {
    careerItemHeader.addEventListener("click", event => {
        careerItemHeader.classList.toggle("active");
        const accordionItemBody = careerItemHeader.nextElementSibling;
        if (careerItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});