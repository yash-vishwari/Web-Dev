let arr =[1,2,3,4,5,6,7,8,9,10];


arr.push(110);
let val1 =arr.pop();

arr.unshift(110);
let val2 =arr.shift()

let ind =arr.indexOf(90);
arr.sort((a,b)=>a-b);
console.log(arr);

arr.forEach((ele) =>{ console.log(ele)});
