console.log
showPassword();
function showPassword()
{

    console.log("123");
    const passWordTable = document.getElementById("passWordTable");

    const passwords = JSON.parse(localStorage.getItem("savedPasswords")) || [];
   
    const TR = document.createElement("tr");
    if (passwords.length <= 0) {
      console.log("Hello");
      TR.innerHTML = `<td colspan ="3" class="fs-4">
                No data to Show
            </td>
            
    `;

      passWordTable.appendChild(TR);

      console.log("Hello");
      return;
    }

    passwords.forEach((e) => {
      console.log("Hello");
      const temp = document.createElement("tr");
      temp.innerHTML = ` 
           <td>${e.siteName}</td>
           <td>${e.userName}</td>
           <td>${e.password}</td>
            
      `;
      passWordTable.appendChild(temp);
    });


}
