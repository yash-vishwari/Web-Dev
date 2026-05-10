document.querySelector("form").addEventListener("submit",(e) =>{

    const dist = Number(document.getElementById("distance").value);

    const amount =dist *11;
    
    const dispDist =document.createElement("h4");
    dispDist.innerText ="Total Distance Travelled :"+dist;
    const Amountdisp ="Your Total Fare is"+amount;

});