/* two dom elements the user will be interacting with */
const menu = document.querySelector('nav');
const  btn = document.querySelector('.menu-btn');

/*user is listening for a click, we either do anon functions ('click', function(){ or you can call functions*/
btn.addEventListener('click', toggleMenu);
function toggleMenu () {
  menu.classList.toggle('hide'); //if it has hide it'll take it away, if not it'll give it*
  btn.classList.toggle('change'); //adding the class change to menu-btn, so two will rotate & one will disappear
}
