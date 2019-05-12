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



