// declare variables
// const dropdown = document.querysSelector('#dropdown-icon');
// const classes = document.querySelector('#menu').classList;

// on click if class hidden is present -> remove the class
// otherwise, add class hidden

// dropdown.addEventListener('click',() => {
//     classes.toggle("hidden");
// })

const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    } 
    else {
    menu.classList.add('hidden');
}
})