'use strict';

// //Add a class when clicking on the menu 
//  let hamburger = document.querySelector('.c__hamburger').addEventListener('click', function(e){

//     e.preventDefault(); // Stop somthing
//     this.classList.toggle('is_active');// Checking for a class is active if there is something doing

//     if(this.classList.contains('is_active')){
//     // Hide menu
//     this.classList.remove('is_active');
//     document.querySelector('#menu').classList.remove('nav_active');
//     document.body.classList.remove('body_active');
//     }else{
//     // Show menu
//     this.classList.add('is_active');
//     document.querySelector('#menu').classList.add('nav_active');
//     document.body.classList.add('body_active');
//     }
//  });

var btn = document.getElementById('show');
var nav = document.getElementById('nav');

btn.addEventListener('click', function() {
    nav.classList.toggle('active');
});
