
function show_list() {
    var show = document.getElementById("drop-list");

    if (show.style.display == "block") {
        show.style.display = "none";
    } else {
        show.style.display = "block";
    }
}
function show_list_2() {
    var show_2 = document.getElementById("drop-list-2");

    if (show_2.style.display == "block") {
        show_2.style.display = "none";
    } else {
        show_2.style.display = "block";
    }
}
function show_list_3() {
    var show_3 = document.getElementById("drop-list-3");

    if (show_3.style.display == "none") {
        show_3.style.display = "block";
    } else {
        show_3.style.display = "none";
    }
}
function show_list_4() {
    var show_4 = document.getElementById("drop-list-4");

    if (show_4.style.display == "none") {
        show_4.style.display = "block";
    } else {
        show_4.style.display = "none";
    }
}
/*
window.onclick = function (event) {
    if (event.target.matches('.drop-click')) {
        var drop = document.getElementById('drop-list')
        if (drop.style.display == "block") {
            drop.style.display = "none";
        } else {
            drop.style.display = "block";
        }

    }
}
window.onclick = function (event) {
   if (!event.target.matches('.drop-click')) {
        var drop = document.getElementById('drop-list')
        drop.style.display = "block";

    }
} */

function night_mode(){
    var body = document.body;
    var img = document.getElementById("mode-toggle-img");    
    var logo = document.getElementById("nav-logo");
    var linkedin = document.getElementById("linkedin");
    var facebook = document.getElementById("facebook");
    var twitter = document.getElementById("twitter");
    var baby = document.getElementById("baby");
    var navbar_AM = document.getElementById("nav-link-AM");
    var navbar_MS = document.getElementById("nav-link-MS");
    var navbar_MWH = document.getElementById("nav-link-MWH");
    var navbar_CM = document.getElementById("nav-link-CM");

    if(body.classList.toggle("dark")){
       img.src = imgSrc;
       logo.src = logosrcDM;
       linkedin.src = linkedinsrcDM;
       facebook.src = facebooksrcDM;
       twitter.src = twittersrcDM;
       baby.src = babysrcDM;
       navbar_AM.style.color="white"; 
       navbar_MS.style.color="white"; 
       navbar_MWH.style.color="white"; 
       navbar_CM.style.color="white"; 
    }else{
        img.src = imgSrcLM;
        logo.src = logosrcLM;
        linkedin.src = linkedinsrcLM; 
        facebook.src = facebooksrcLM; 
        twitter.src = twittersrcLM; 
        baby.src = babysrcLM; 
        navbar_AM.style.color="#2f2f2f"; 
        navbar_MS.style.color="#2f2f2f"; 
        navbar_MWH.style.color="#2f2f2f"; 
        navbar_CM.style.color="#2f2f2f"; 
    }

    
    
}