const lftPanel = document.getElementById("lPanel");

let offset = -270;
let idInterval;
let idStopInerval;

function ShowSideBar(){
    offset += 5;
    lftPanel.style.marginLeft = `${offset}px`;

    if(offset >= -15){
        clearInterval(idInterval);
        return;
    }
}


function HideSideBar(){
    offset-=5;
    lftPanel.style.marginLeft = `${offset}px`;
    
    if(offset <= -270){
        clearInterval(idStopInerval);
    }
}



function sideBarManager(e){   
    if(e.target.tagName == "BUTTON"){
        console.log(e.target);
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