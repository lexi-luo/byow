function openNav() {
    console.log('are you getting in here?')
    document.getElementById('navv').style.width = "20%";
    // document.getElementById('main').style.marginLeft = "20%";
}

function closeNav() {
    console.log('rawr')
    document.getElementById("navv").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
}

function boozeMap(){
    var off=document.getElementById("boozemap");
    if (off.style.display == "none") {
        off.style.display = "block";
    } else {
        off.style.display = "none";
    }        
}