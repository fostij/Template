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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gLy9BZGQgYSBjbGFzcyB3aGVuIGNsaWNraW5nIG9uIHRoZSBtZW51IFxyXG4vLyAgbGV0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jX19oYW1idXJnZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gU3RvcCBzb210aGluZ1xyXG4vLyAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdpc19hY3RpdmUnKTsvLyBDaGVja2luZyBmb3IgYSBjbGFzcyBpcyBhY3RpdmUgaWYgdGhlcmUgaXMgc29tZXRoaW5nIGRvaW5nXHJcblxyXG4vLyAgICAgaWYodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ2lzX2FjdGl2ZScpKXtcclxuLy8gICAgIC8vIEhpZGUgbWVudVxyXG4vLyAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdpc19hY3RpdmUnKTtcclxuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51JykuY2xhc3NMaXN0LnJlbW92ZSgnbmF2X2FjdGl2ZScpO1xyXG4vLyAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdib2R5X2FjdGl2ZScpO1xyXG4vLyAgICAgfWVsc2V7XHJcbi8vICAgICAvLyBTaG93IG1lbnVcclxuLy8gICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnaXNfYWN0aXZlJyk7XHJcbi8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpLmNsYXNzTGlzdC5hZGQoJ25hdl9hY3RpdmUnKTtcclxuLy8gICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnYm9keV9hY3RpdmUnKTtcclxuLy8gICAgIH1cclxuLy8gIH0pO1xyXG5cclxudmFyIGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93Jyk7XHJcbnZhciBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2Jyk7XHJcblxyXG5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxufSk7XHJcbiJdfQ==
