function Submit()
{

    const name =document.getElementById("name");
    const phoneNo = document.getElementById("number");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const div1 =document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const div4 = document.createElement("div");

    // for(let i=0;i<name.value.length;i++)
    // {
    //     if(isValid(name.value.charAt(i)) ==false)
    //     {
    //         window.alert("Please Enter a Valid Name");
    //         window.location.reload();
    //         return ;
    //     }
    // }
    if(!/^[A-Za-z ]+$/.test(name.value))
        

    div1.innerText="Name :" +name.value;

    div2.innerText = "Phone :"+phoneNo.value;

    div3.innerText = "Email :"+email.value;

    div4.innerText = "Password :"+password.value;

    const container =document.createElement("div");
    container.appendChild(div1);
    container.appendChild(div2);
    container.appendChild(div3);
    container.appendChild(div4);
    container.style.marginTop ="20px";

    const btn = document.getElementById("submit");
    btn.after(container);

    name.value ="";
    phoneNo.value ="";
    email.value ="";
    password.value ="";


    let a ="";
    

    

}



// function isValid(char)
// {
//     if((char >='a' && char <='z') ||(char >='A' && char <='Z') || char =='')
//     {
//         return true;
//     }

//     return false;
// }


