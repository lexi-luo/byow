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

function boozeMap() {
    var off = document.getElementById("boozemap");
    if (off.style.display == "none") {
        off.style.display = "block";
    } else {
        off.style.display = "none";
    }
}

var hash = document.getElementById("hash");
var confirm_hash = document.getElementById("confirm_hash");

function validateHash() {
    if (hash.value != confirm_hash.value) {
        confirm_hash.setCustomValidity("Your Secret Thing Doesn't Match");
    } else {
        confirm_hash.setCustomValidity('');
    }
}

hash.onchange = validateHash;
confirm_hash.onkeyup = validateHash;