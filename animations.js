const profile = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('profile_animate');
    }
  });
});

profile.observe(document.querySelector('#profile_img'));

const webdev = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('web_animate');

    }
  });
});

webdev.observe(document.querySelector('#webdev'));


const skills = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('skill_scale');

    }
  });
});

skills.observe(document.querySelector('.html'));
skills.observe(document.querySelector('.css'));
skills.observe(document.querySelector('.js'));
skills.observe(document.querySelector('.php'));
skills.observe(document.querySelector('.sql'));
skills.observe(document.querySelector('.illustrator'));
skills.observe(document.querySelector('.photoshop'));
skills.observe(document.querySelector('.xd'));
skills.observe(document.querySelector('.wordpress'));




const sunflower = new IntersectionObserver( entries => {  
  entries.forEach(entry => {
    if (entry.isIntersecting) {        
      entry.target.classList.add('contact_animate');
    }
  });
});

sunflower.observe(document.querySelector('.contact'));

     var slideIndex = 1;
     showSlides(slideIndex);
     
     function plusSlides(n) {
       showSlides(slideIndex += n);
     }
     
     function currentSlide(n) {
       showSlides(slideIndex = n);
     }
     
     function showSlides(n) {
       var i;
       var slides = document.getElementsByClassName("mySlides");
       
       if (n > slides.length) {slideIndex = 1}    
       if (n < 1) {slideIndex = slides.length}
       for (i = 0; i < slides.length; i++) {
           slides[i].style.display = "none";  
       }
      
       slides[slideIndex-1].style.display = "block";  
       
     }

   
