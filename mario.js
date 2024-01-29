var mario = document.getElementById('mario');
var marioButt = document.getElementsByClassName('marioButt');
mario.style.margin=0
function moveMario(index){
   var step = 10;
 
if (index == 0)
{
 mario.src ='./media/mario left.jpg'
var mariomoveLeft = mario.style.marginLeft;
console.log( parseInt(mariomoveLeft));
//console.log( parseInt('20px'))
mario.style.marginLeft = parseInt(mariomoveLeft) +10+ 'px';
if((parseInt(mariomoveLeft) +10)>950){
   alert('you can not move left')

}
else{
   mario.style.marginLeft = parseInt(mariomoveLeft) +10+ 'px';

}

}
else if (index == 1)
{
   mario.src ='./media/mario right.jpg'
   var mariomoveLeft = mario.style.marginLeft;
if( (parseInt(mariomoveLeft)-10) < 0 ){
   alert('you can not move right')
}
else{
   mario.style.marginLeft = parseInt(mariomoveLeft) -10+ 'px';
 
}

}
else if (index == 2)
{ 
   mario.src ='./media/mario up.jpg'
   var mariomovedown = mario.style.marginTop
   mario.style.marginTop= parseInt(mariomovedown) -10+ 'px';

if((parseInt(mariomovedown) -10)<0)
{
   alert('you can not move up')


}
else{
   mario.style.marginTop= parseInt(mariomovedown) -10+ 'px';

}



}
else if (index == 3)
{
   mario.src ='./media/mario down.jpg'
   var mariomovedown = mario.style.marginTop
if((parseInt(mariomovedown) +10)>650){
   alert('you can not move down')

}
else{
   mario.style.marginTop= parseInt(mariomovedown) +10+ 'px';

}


}

}
function moveAround(){
   var randomIndex = Math.floor(Math.random() * 4);
    moveMario(randomIndex);

}
function moveAroundRandomly() {
   setInterval(moveRandom, 1000); 
}
function stopMove(){
   clearInterval(stop);
   alert('Movement has been stopped')
}



























//حلي انا كان بطريقة ال switch
   // switch( sympol){
     /*
switch( MoveMario){
   case ' Left':
       marioBtt =  Left;
       break;
        case ' right':
            marioBtt =right  ;
            break;
           case 'Move to up':
               marioBtt =  up;
                break;
                case 'Move Down':
                    marioBtt = Down;
                break;


           
    
    }
    document.getElementsByClassName('marioBtt')[x].innerHTML
*/
