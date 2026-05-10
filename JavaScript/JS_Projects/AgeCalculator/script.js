




document.querySelector("form").addEventListener("submit" ,(e) =>{
    e.preventDefault();
    const dob =document.getElementById("dob");
    const BirthYear = Number(dob.value.split("-")[0]);
    const currDate = document.getElementById("CurrYear");
    const currYr =Number(currDate.value.split("-")[0]);
    let age = currYr - BirthYear;
    const para =document.createElement("h2");
    para.innerText="Your Age is "+age+"Years";
    document.getElementById("Calculate").after(para);
    para.style.marginBottomBottom ="20px";
    console.log(age);
   
   dob.value ="";
   currDate.value ="";

   
});

//confirm
//alert
