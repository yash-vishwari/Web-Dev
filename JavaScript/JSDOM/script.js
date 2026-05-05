function Submit()
{
   
    const name =document.getElementById("fullName");
    const city =document.getElementById("city");
    const email =document.getElementById("mail");
    const pswd = document.getElementById("pswd");
    
    const dispname = document.getElementById("myName");
    const dispcity = document.getElementById("myCity");
    const dispemail = document.getElementById("myEmail");
    const disppswd = document.getElementById("myPassword");
    

    dispname.textContent="Name:  "+name.value;
    dispcity.textContent = "City: "+city.value;
    

    dispemail.textContent = "Email: "+email.value;
    disppswd.textContent = "Password: "+pswd.value;

    dispname.classList.remove("disphide");
    dispname.classList.add("dispshow");


    dispcity.classList.remove("disphide");
    dispcity.classList.add("dispshow");

    dispemail.classList.remove("disphide");
    dispemail.classList.add("dispshow");


    disppswd.classList.remove("disphide");
     disppswd.classList.add("dispshow");

}

// radio button checkbox