// Carousal //

const carousalSlide= document.querySelector('.carousal-slide');
const carousalImages= document.querySelectorAll('.carousal-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter=1;
const size =carousalImages[0].clientWidth;

carousalSlide.style.transform ='translate(' +(-size * counter) +'px)';


nextBtn.addEventListener('click',() =>{
    if(counter >= carousalImages.length - 1) return;
    carousalSlide.style.transition ="transform 0.4s ease-in-out";
    counter++;
    carousalSlide.style.transform ='translate(' +(-size * counter) +'px)';
    
});

prevBtn.addEventListener('click',() =>{
    if(counter <= 0) return;
    carousalSlide.style.transition ="transform 0.4s ease-in-out";
    counter--;
    carousalSlide.style.transform ='translate(' +(-size * counter) +'px)';
    
});


carousalSlide.addEventListener('transitionend', () =>{
    if(carousalImages[counter].id==='lastimage-clone'){
        carousalSlide.style.transition= "none";
        counter= carousalImages.length-2;
        carousalSlide.style.transform ='translate(' +(-size * counter) +'px)';
        }
    if(carousalImages[counter].id==='firstimage-clone'){
        carousalSlide.style.transition= "none";
        counter= carousalImages.length - counter;
        carousalSlide.style.transform ='translate(' +(-size * counter) +'px)';
        }      

});

window.onorientationchange = function() { 
var orientation = window.orientation; 
switch(orientation) { 
case 0:
case 90:
case -90: window.location.reload(); 
break; } 
};
