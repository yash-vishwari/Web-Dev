let arr =[1,2,3,4,5,6,7,8,9,10];


arr.push(110);
// let val1 =arr.pop();

// arr.unshift(110);
// let val2 =arr.shift()

// let ind =arr.indexOf(90);
// arr.sort((a,b)=>a-b);
// console.log(arr);

// arr.forEach((ele) =>{ console.log(ele)});


// key ->only primitive (number or string but not boolean)

// let TwodArray =[["Person1 ","1234567890","Delhi","1992"],["Faculty2","345678901","Punjab","1993"],["Faculty3","2343234322","Banglore","1994"]];


// TwodArray.forEach((ele)=>console.log(ele[1]));






// let t =[];

// for(let i=0;i<=32;i++)
// {
//     t.append([]);
// }



let num ="";
let n=32;
console.log(num);
while(n !=0)
{
    num += n & 1;
    
    n =n>>1;
}
let ans ="";
for(let i=num.length-1;i>=0;i--)
{
    ans +=num.charAt(i);
}
console.log(ans);
num =ans;
console.log(num);

function helper(num,ind,t,prev)
{
    if(ind ==num.length)
    {
        return 1;
    }

    let lb =0;
    let hb =1;

    if(t ===1)
    {
        hb =num.charAt(ind)-'0';
    }
    let ans =0;
    let tight =0;
    for(let i =lb;i<=hb;i++)
    {

        if(t ==1 && i ==hb)
        {
            tight =1;
        }
        ans += helper(num,ind+1,tight,i);
        if(prev ===1)
        {
           return ans;
        }

    }

    return ans;

}


let a =helper(num,0,1,0);
console.log(a);

let obj = [
  {
    "name": "Kunal",
    age: 27,
    city: "Delhi",
    profession: "Software Developer",
  },

  {
    "name": "Raj",
    age: 30,
    city: "West Bengal",
    profession: "Teacher",
  },

  {
    "name": "Varun",
    age: 30,
    city: "New Delhi",
    profession: "Teacher&Motivator",
  },

  {
    "name": "Kundan",
    age: 30,
    city: "UttraKhand",
    profession: "CivilServant",
  },
];


// obj.forEach((ele) =>{

//     console.log(ele["name"]);//Bracket Notation
//     console.log(ele.name);//Dot notations
// });

let KeysArray =Object.keys(obj[1]);
let ValueArray =Object.values(obj[1]);

KeysArray.forEach((key)=>{

    console.log(obj[1][key]);
});

let EntriesArray =Object.entries(obj[1]);
console.log(EntriesArray);

let newArray =[11,12,13,14];
let demo =newArray.map((ele) =>{
    ele =2*ele;
    return ele;
});
console.log(demo);
//Objects ->JSON same (java Script Object Notation)
//Bracket Notation ->Both array and json
//DOT Notation ->only works on JSON
//key value pair in object
//Object.keys(objName) ->returns an array of keys ,** here bracket notation can only be used 
//Object.values(objName) ->returns an array of values conatined by the object
//.find((val) =>val>20 or val<20 or val ==20)
//.findIndex((val) =>val==6)
//.findLastIndex((val) => val===6);

//.map. 
//.filter  
//.split(regex) ->only applicable on Strings return an splitted string in array

let s ="This is a String";
let k =s;
s += " Right ??";
console.log(s)
console.log(k);