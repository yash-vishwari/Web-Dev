async function getData(val) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
     
        resolve("Promise Resolved");
       console.log(val);
    }, 2000);
  });
}


for(let i=1;i<=10;i++)
{
   setTimeout(() => {
     console.log(i);
   }, i * 1000);
}

// const x = await getData(1);


// await getData(2);
// await getData(3);
// await getData(4);
// await getData(5);
