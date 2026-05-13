

let num =[223,345];


const ans =[];


for(let x of num)
{
    let temp =x;
    while (temp.toFixed(0) > 0) {
      ans.push((temp% 10).toFixed(0));
      temp = temp / 10;
      
    }

}


console.log(ans);



const name = document.getElementById("name");
