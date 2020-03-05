/*
this file is for null vs undefined.
undefined means any object you call that naver axist or you not declired value of any objects.
null you need to defined
*/

//found undefined
let name;

function add (num1, num2){
    console.log(num1+num2);
    return
}
const name = add(2,4);

function add(num1, num2){
    console.log(num1,num2)
}
const name = add(12);

const fname ={name:"kazi", id:1122};
console.log(fname.phone);

//Null
const name= null;
console.log(name);