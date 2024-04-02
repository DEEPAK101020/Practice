// let s="Deepak  kumar    a"
// let ans=s.trim().split(' ');
// let n=ans.length;
// console.log( ans[n-1].length);

// let arr=[1,2,3,4,5];

// let res=arr.map((ele)=>{
//     return ele*2;
// })
// console.log(res);


// let res2=arr.filter((ele)=>{
//     return ele>2;
// })
// console.log(res2);


// let res3=arr.reduce((acc,curr)=>{
//     return acc+curr
// },0)
// console.log(res3);

// IFFE
// (function square(num){
//     console.log( num*num)
// })(5);

//  console.log(a);
// const a=10;//can't acess before

// console.log(b);
// let b=10;//can't acess before 

// console.log(c);
// var c=10;//undefined



// var x=10;
// var fun=function(){
// console.log(x);
// var x=20;
// }

// fun();//undefined

// //rest spread
// function sum(...nums){ //...nums is rest
// console.log(nums)

// }
// var arr=[5,6];
// sum(...arr)//here it is called spread 


// let str = "deepak kumar";

// rev=''
// for(let i=str.length-1;i>=0;i--){
//     rev +=str.charAt(i);
// }
// console.log(rev)

// let str = "deepak kumar";
// let reversedStr = str.split('').reverse().join('');
// console.log(reversedStr);


// process.next
// Promise
// setImidiate
// setInterval


//  function fun(){
//    console.log(arguments)
// }
//  fun(1,2,3)
// let fun=()=>{
//     console.log(arguments)
// }
// fun(1,2,3)
function outerFunction() {
    let outerVariable = 'I am outer!';
    
    function innerFunction() {
        console.log(outerVariable);
    }
    
    return innerFunction;
}

let closure = outerFunction();
closure(); // Output: I am outer!

