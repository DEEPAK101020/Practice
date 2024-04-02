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

//rest spread
function sum(...nums){ //...nums is rest
console.log(nums)

}
var arr=[5,6];
sum(...arr)//her it is called spread 