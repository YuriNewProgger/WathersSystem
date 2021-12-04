const lftPanel = document.getElementById("lPanel");

let x = -270;
let idInterval;
let idStopInerval;
function ShowSideBar(){
    x += 5;
    lftPanel.style.marginLeft = `${x}px`;

    if(x >= -15){
        clearInterval(idInterval);
        return;
    }
}


function HideSideBar(){
    x-=5;
    lftPanel.style.marginLeft = `${x}px`;
    
    if(x <= -270){
        clearInterval(idStopInerval);
    }
}



function sideBarManager(e){   
    if(e.target.tagName == "LI"){
        console.log(true);
    }
    else{
        let st = getComputedStyle(lftPanel).marginLeft;
    if(st >= `${-270}px`){

        idInterval = setInterval(ShowSideBar, 2);
    }
    else if(st >= `${-15}px`){

        idStopInerval = setInterval(HideSideBar, 2);    
    }
    }


    
}


lftPanel.addEventListener("click", sideBarManager);