let slide = document.querySelectorAll('.img-item'),
    back  = document.querySelector('.back'),
    next  = document.querySelector('.next'),
    slideIndex = 1;

    showSlides(slideIndex);
    
    function showSlides(n){

    if(n > slide.length){
    slideIndex = 1;
   }

    if(n < 1){
    slideIndex = slide.length;
   }

      slide.forEach((item) => item.style.display = "none");
      //for(let i = 0; i > slide.length; i++){// Це аналог верхньої функції
         // slide[i].style.display = 'none';
      //}
     slide[slideIndex - 1].style.display = 'block';
    }
   
    function plusSlides(n){
      showSlides(slideIndex += n);
     }
     function currentSlide(n){
          showSlides(slideIndex = n);
     }
  
     back.addEventListener('click', function(){
      plusSlides(-1);
     });
  
     next.addEventListener('click', function(){
      plusSlides(1);
     });




//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBzbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbWctaXRlbScpLFxyXG4gICAgYmFjayAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFjaycpLFxyXG4gICAgbmV4dCAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dCcpLFxyXG4gICAgc2xpZGVJbmRleCA9IDE7XHJcblxyXG4gICAgc2hvd1NsaWRlcyhzbGlkZUluZGV4KTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc2hvd1NsaWRlcyhuKXtcclxuXHJcbiAgICBpZihuID4gc2xpZGUubGVuZ3RoKXtcclxuICAgIHNsaWRlSW5kZXggPSAxO1xyXG4gICB9XHJcblxyXG4gICAgaWYobiA8IDEpe1xyXG4gICAgc2xpZGVJbmRleCA9IHNsaWRlLmxlbmd0aDtcclxuICAgfVxyXG5cclxuICAgICAgc2xpZGUuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpO1xyXG4gICAgICAvL2ZvcihsZXQgaSA9IDA7IGkgPiBzbGlkZS5sZW5ndGg7IGkrKyl7Ly8g0KbQtSDQsNC90LDQu9C+0LMg0LLQtdGA0YXQvdGM0L7RlyDRhNGD0L3QutGG0ZbRl1xyXG4gICAgICAgICAvLyBzbGlkZVtpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAvL31cclxuICAgICBzbGlkZVtzbGlkZUluZGV4IC0gMV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgZnVuY3Rpb24gcGx1c1NsaWRlcyhuKXtcclxuICAgICAgc2hvd1NsaWRlcyhzbGlkZUluZGV4ICs9IG4pO1xyXG4gICAgIH1cclxuICAgICBmdW5jdGlvbiBjdXJyZW50U2xpZGUobil7XHJcbiAgICAgICAgICBzaG93U2xpZGVzKHNsaWRlSW5kZXggPSBuKTtcclxuICAgICB9XHJcbiAgXHJcbiAgICAgYmFjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIHBsdXNTbGlkZXMoLTEpO1xyXG4gICAgIH0pO1xyXG4gIFxyXG4gICAgIG5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICBwbHVzU2xpZGVzKDEpO1xyXG4gICAgIH0pO1xyXG5cclxuXHJcblxyXG4iXX0=
