console.log('Loaded!');
//Change the style of main-text div
var element= document.getElementById('main-text');
element.innerHTML='NEW VALUE';

// Move the image
var img=document.getElementById('madi');
var marginLeft=0;
 function moveright(){
     marginLeft = marginLeft + 10;
     img.style.marginLeft=marginLeft+'px';
 }
img.onclick=function(){
    var interval=setInterval(moveright, 100);
    
};

