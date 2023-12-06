// var prevScrollpos = window.pageYOffset; 
 //   window.onscroll = function() { 
 //     var currentScrollPos = window.pageYOffset; 
 //     if (prevScrollpos > currentScrollPos) { 
 //       document.querySelector("header").style.top = "0"; 
 //       document.querySelector(".footer").style.bottom = "0"; 
 //     } else { 
 //       document.querySelector("header").style.top = "0"; 
 //       document.querySelector(".footer").style.bottom = "-200"; 
 //     } 
 //     prevScrollpos = currentScrollPos; 
 //   } 
  
  
 const counts = document.querySelectorAll('.counter'); 
 const reveal = document.querySelectorAll('.reveal') 
  
 const speed = 5000 
  
  
 //Reavel Elements  function 
 window.addEventListener('scroll', () => {reveal.forEach((element) => { 
     const height = window.innerHeight 
     const revealTop = element.getBoundingClientRect().top; 
     const revealPosition = 180; 
  
     if (revealTop < height - revealPosition){ 
         element.classList.add('visible'); 
         if (element.classList.contains('stats') ){ 
             //Counter  function 
             counts.forEach((count) => { 
                 let value = 0; 
                 let target = +(count.getAttribute('data-target')); 
                 let duration =  speed / target 
                 let counter = setInterval( () => { 
                     value = value + 1 
                     count.textContent = value 
                     if (value == target) { 
                         clearInterval(counter) 
                     } 
  
                 }, duration) 
             }) 
         } 
     } else { 
         element.classList.remove('visible') 
         if (element.classList.contains('stats') ){ 
             //Counter  function 
             counts.forEach((count) => { 
                 let value = 0; 
                 let target = +(count.getAttribute('data-target')); 
                 let duration =  speed / target 
                 let counter = setInterval( () => { 
                     value = value + 1 
                     count.textContent = value 
                     if (value == target) { 
                         clearInterval(counter) 
                     } 
  
                 }, duration) 
         }) 
         } 
     } 
  
 })} ) 
  
 const Totop = () => { 
     scrollTo(0, 0) 
 } 
 