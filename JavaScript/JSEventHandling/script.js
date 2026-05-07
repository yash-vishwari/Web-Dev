// function Bulb1Blue()
// {

//     const ele =document.getElementById("bulb1");
//     const selfButton = document.getElementById("bulb1Green");
//     selfButton.style.backgroundColor = ele.style.backgroundColor = "blue";

// }



// function Bulb1Green()
// {

//     const ele = document.getElementById("bulb1");
//     const selfButton =document.getElementById("bulb1Green");
//     selfButton.style.backgroundColor="green";

//     ele.style.backgroundColor ="green";
// }

// function Bulb1Off()
// {
//     const ele =document.getElementById("bulb1");
     
//     ele.style.backgroundColor="white";
// }


// function Bulb1Red()
// {
//     const ele =document.getElementById("bulb1");
//     const selfButton = document.getElementById("bulb1Green");
//      selfButton.style.backgroundColor="red";
//     ele.style.backgroundColor="red";

// }

// document.getElementById("SelectBulbColor").addEventListener('change',ChangeButtonColor);

// function ChangeButtonColor()
// {
//     const bulb =document.getElementById("bulb1");
//     const color = document.getElementById("SelectBulbColor").value;
//     bulb.style.backgroundColor=color;
// }

//onclick 
//onhover
//eventHandler
//addEventListener("type of event",functionname) -->Improves security
//events ->click ,hover,input,change

//window.location.reload();

document.getElementById("BgColor").addEventListener('change',ChangeBgColor);
document.getElementById("HeadingColor").addEventListener('change',ChangeHeadingColor);
document.getElementById("ParaColor").addEventListener('change',ChangeParaColor);


function ChangeBgColor()
{
    const bg =document.getElementById("BgColor").value;
    const box = document.getElementById("Contentbox");
    box.style.backgroundColor =bg;
}

function ChangeHeadingColor() {

    const hclr = document.getElementById("HeadingColor").value;
    const heading = document.getElementById("heading");
    heading.style.color =hclr;
}

function ChangeParaColor() {

    const paraclr = document.getElementById("ParaColor").value;
    const para = document.getElementById("para");
    para.style.color = paraclr;

}


function reset()
{
    window.location.reload();
}
