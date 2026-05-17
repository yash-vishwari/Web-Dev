
function SaveData(packet)
{
    

    let prevData =JSON.parse(localStorage.getItem("savedPasswords")) ||[];

    prevData.push(packet);
    localStorage.setItem("savedPasswords",JSON.stringify(prevData));

}


function SaveButton()
{

   
   
    const siteName = document.getElementById("siteName").value.trim();
    const userName = document.getElementById("userName").value.trim();
    const password = document.getElementById("password").value;

    console.log("siteName");
    const packet = {
      siteName: siteName,
      userName: userName,
      password: password
    };
    SaveData(packet);
}

function clearButton()
{
       const siteName = document.getElementById("siteName");
       const userName = document.getElementById("userName");
       const password = document.getElementById("password");
       siteName.value ="";
       userName.value ="";
       password.value ="";
}

 