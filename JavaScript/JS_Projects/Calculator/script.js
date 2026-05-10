function Calculate(data)
{


    const eq =document.getElementById("result");
    if(data ==="AC")
    {
        eq.innerText="0";
        return ;
    }

    if(data ==="C")
    {
        if(eq.innerText.length ==1)
        {
             eq.innerText = "0";
        }

        else{

            const newEq = eq.innerText.slice(0, -1);
            eq.innerText = newEq;
        }

        return ;
        
    }

    if(data ==="=")
    {
        const result =eval(eq.innerText);
        eq.innerText=result;
        return ;
    }

    if(eq.innerText =="0")
    {
        eq.innerText=data;
    }
    else
    {
        eq.innerText += data;
    }



}