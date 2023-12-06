 const select = (selector, all = false) => { 
   return all ? document.querySelectorAll(selector) : document.querySelector(selector); 
 }; 
  
 const removePreloader = () => { 
   const preloader = select('#preloader'); 
   if (preloader) { 
     preloader.remove(); 
   } 
 }; 
  
 window.addEventListener('load', removePreloader); 
  
 const on = (type, el, listener, all = false) => { 
   let selectEl = select(el, all); 
   if (selectEl) { 
     if (all) { 
       selectEl.forEach(e => e.addEventListener(type, listener)); 
     } else { 
       selectEl.addEventListener(type, listener); 
     } 
   } 
 }; 
  
 const onscroll = (el, listener) => { 
   el.addEventListener('scroll', listener); 
 };
