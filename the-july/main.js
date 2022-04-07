//Select element function
const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function() {
    body.classList.toggle('open');
});

//scorll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left',{
    origin:'left',
    duration: 1000, //duration is in miliseconds 1000ms=1s
    distance: '25rem',
    delay: 300 //same as duration
})

sr.reveal('.animate-right',{
    origin:'right',
    duration: 1000, //duration is in miliseconds 1000ms=1s
    distance: '25rem',
    delay: 600 //same as duration
})

sr.reveal('.animate-top',{
    origin:'top',
    duration: 1000, //duration is in miliseconds 1000ms=1s
    distance: '25rem',
    delay: 600 //same as duration
})

sr.reveal('.animate-bottom',{
    origin:'bottom',
    duration: 1000, //duration is in miliseconds 1000ms=1s
    distance: '25rem',
    delay: 600 //same as duration
})