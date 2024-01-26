//alert("hi im amr")
//console.log("hi im amr")
 
// data type in java scrpit (انواع البيانات)
// var type
// if condition
// loop( for, while, do-while)




// var type:
// var
// let
// const(القيمه تبعته ثابتة ما بتتغير في حال تخزينها)

// 1- string any caracter inside ''or ""
// 2- number (intger, flot)
// 3- boolean (true or false)

// data type in java scrpit:

// null:null value( القيمة الموجودة دخاله فاضية)
// undfinde:undfinde value(نوع من انواع ال errore)
//array
// object: kaye:value,kaye:value
//var name= value 


var home=' i am new home'
var homes=20;
console.log(homes);


let single = 'single-quoted';
let singles ='a';
console.log(singles)

console.log("hallo i am amr");



var newlist =[1,2,3,4,5];
console.log(newlist[2]);
newlist[3]=40;
console.log(newlist);


var newObject={
name:'amr bataineh',
age:23,
hobbies:['footbel' ,'gem']



}
console.log(newObject);
console.log(newObject.hobbies);
console.log(newObject.name);
console.log(newObject.age);


if (8>=9){
    console.log('9 is greater than 9');

}

 else if (8<=9){
    console.log('9 is less than 9');

}
else{
    console.log('9 is not greater than 9'); 

}

document.getElementsByClassName('test')[0].innerHTML ='hello';



// 9-function :
//what is function?
// function is a block of code that can be called and executed when we need it

// how to creat function?
// function name(parm1,parm2,parm3){


// }
//call function 
//name(parm1,parm2,parm3);

function LodingSms() {
  alert('LodingSms');  
    
}
// LodingSms()

function wait() {
    alert('wait');

    
}
// wait()
/*
function checkEvenOrodd() {
    let num= document.getElementById('input').value;
console.log(num);
 if (num %2 == 0) {

    document.getElementById('result').innerHTML = 'even';

 }
 else{

    document.getElementById('result').innerHTML = 'odd';



}
}
*/
   function primeOrNot() {
let num = document.getElementById('input').value;
console.log('num');
for( let i = 2 ; i< num ;i++)
{
    if( num % i == 0){
        document.getElementById('result').innerHTML = 'not prime';
        break;
    }
    else{

        document.getElementById('result').innerHTML ='prime';
    }
}
   }

