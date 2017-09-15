console.log('Loaded!');
//Change the style of main-text div
var element= document.getElementById('main-text');
element.innerHTML='NEW VALUE';

// Move the image
var img=document.getElementById('madi');
var marginleft=0;
 function moveright(){
     marginleft = marginleft + 10;
     img.style.marginleft=marginleft+'px';
 }
img.onclick=function(){
    var interval=setInterval(moveright, 100);
};

