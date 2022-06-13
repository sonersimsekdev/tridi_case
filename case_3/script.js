const disable = document.querySelector("#disableB");
const enable = document.querySelector("#enableB");
const testImg = document.getElementById("demoImg");

function disableScrolling() {
  console.log("scroll disable rn");
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}

function enableScrolling() {
  console.log("scroll enable rn");
  window.onscroll = function () {};
}

function addFilterBlur() {
  console.log("img-blur eklendi");
  testImg.classList.add("img-blur");
}

function disableFilterBlur() {
  console.log("img-blur çıkarıldı");
  testImg.classList.remove("img-blur");
}

window.addEventListener("scroll", function () {
  document.getElementById("showScroll").innerHTML = window.pageYOffset + "px";
  if (window.pageYOffset >= 300 && window.pageYOffset <= 700) {
     testImg.classList.add("img-blur");
    //disableScrolling();
  } else {
    testImg.classList.remove("img-blur");
    //enableScrolling();
  }
});

let rect = testImg.getBoundingClientRect();
console.log("x: "+ rect.x);
console.log("y: "+ rect.y);
