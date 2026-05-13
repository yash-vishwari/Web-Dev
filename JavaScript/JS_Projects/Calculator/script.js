function Calculate(data)
{

    const eq = document.getElementById("result");
    if(data ==="AC" )
    {
    //    console.log("data");
        eq.innerText ="0";
        return;
       
    }

    else if (data === "C" || data === "Backspace") {
      if (eq.innerText.length == 1) {
        eq.innerText = "0";
      } else {
        const newEq = eq.innerText.slice(0, -1);
        eq.innerText = newEq;
      }

      return;
    } else if (data === "=" || data === "Enter") {
      const result = eval(eq.innerText);

      eq.innerText = result;
      return;
    } else if (isValid(data) === true) {
      if (eq.innerText == "0") {
        eq.innerText = data;
      } else {
        eq.innerText += data;
      }
    }
    



}

window.addEventListener("keyup",(e) =>
{
    if(isValid(e.key) ===true)
    {
       Calculate(e.key);
       return ;
    }
    else{
        return ;
    }
       

})


function isValid(key)
{
    
    if( key ==="1" ||key ==="2" || key ==="3" ||key ==="4" ||key ==="5" || key ==="6"||key ==="7" ||key ==="8" ||key ==="9" || key ==="0"||key ==="+" ||key ==="-" || key ==="*" || key ==="/"||key ==="." ||key ==="C" || key ==="=" ||key ==="%"||key ==="Enter" || key ==="Backspace")
    {
       
        
        return true;
    }

    return false;
}