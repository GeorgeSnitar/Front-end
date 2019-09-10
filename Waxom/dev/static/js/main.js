document.addEventListener( 'DOMContentLoaded', function( event ) {

let btn = document.querySelector('.hamburger__button');
let headMenu = document.querySelector('.nav');

btn.addEventListener('click', function(e){
    e.preventDefault;
    this.classList.toggle('hamburger__button--active');
    headMenu.classList.toggle('is-active');
    });    

  


       
    

});
