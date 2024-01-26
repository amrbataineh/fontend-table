function MoveMario(x){
let marioBtt = document.getElementsByClassName('marioBtt')[x].value;
let mainimge = document.getElementsByClassName('mainimge'); 
if(marioBtt === 'Left'){
    let mainimge  =  Left;
   
     }
     else if(marioBtt === 'Move right'){
        let mainimge=  right;
   
     }
     else if( marioBtt=== 'Move to up '){
        let mainimge =   up ; 
   
     }
     else if(marioBtt === 'Move Down'){
        let mainimge = Down ;
   
   
     }
     document.getElementsByClassName('marioBtt')[x].innerHTML

     document.getElementsByClassName('mainimge')[x].innerHTML

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