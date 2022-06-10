const disable = document.querySelector('#disableB')
const enable = document.querySelector('#enableB')
const tstImg = document.getElementById('demoImg')

function disableScrolling(){
    console.log("scroll disable rn")
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    console.log("scroll enable rn")
    window.onscroll = function(){};
}

function addFilterBlur(){
    console.log("img-blur eklendi")
    tstImg.classList.add("img-blur");
}

function disableFilterBlur(){
    console.log("img-blur çıkarıldı")
    tstImg.classList.remove("img-blur");
}
