//alert("hi am amr bataineh")
//arguments
function caluclat(x) {
let num1 = document.getElementsByClassName('numb1')[x].value;
let num2 = document.getElementsByClassName('numb2')[x].value;
let sympol = document.getElementsByClassName('sympol')[x].innerHTML;

console.log(sympol);
document.getElementsByClassName('result')[x].style.display='contents'
console.log(sympol);
  if(sympol === '+'){
 var result = parseInt (num1) + parseInt (num2);

  }
  else if(sympol === '-'){
var result = parseInt (num1) - parseInt (num2);

  }
  else if(sympol === '/'){
     var result = parseInt (num1) / parseInt (num2);

  }
  else if(sympol === '*'){
    var result = parseInt (num1) * parseInt (num2);


  }

//حلي انا كان بطريقة ال switch
// switch( sympol){
  //  case '+':
    //    result =  parseInt (num1) + parseInt (num2);
      //  break;
        //case '-':
          //  result =  parseInt (num1) - parseInt (num2);
            //break;
           // case '*':
             //   result = parseInt (num1) * parseInt (num2);
               // break;
                //case '/':
                  //  result = parseInt (num1) / parseInt (num2);
                    //break;


           
    
   // }
    
document.getElementsByClassName('result')[x].innerHTML ='='+ result;

}

function getResult(){
let result = document.getElementsByClassName('result');
let emptyOrNot = true;
for(let index = 0; index < result.length; index++){
if( result [index].innerHTML === ''){
    emptyOrNot = false;

}

}
if(emptyOrNot == false){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });  
}
else{
    Swal.fire({
        position: "cinter",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      })
    
}
}

function darkOrWhite(){
let mainH1 =document.getElementsByClassName('main')[0];
let mainDiv =document.getElementById('mainDiv');
let label =document.getElementsByClassName('form-check-label')[0];


if( mainH1.style.backgroundColor ===''){
    mainH1.style.backgroundColor = 'white';
    mainDiv .style.backgroundColor = 'white';
    label.innerHTML='white';

}
else{
    mainH1.style.backgroundColor = '' ;
    mainDiv.style.backgroundColor = '' ;
    label.innerHTML='Dark';


}
}





