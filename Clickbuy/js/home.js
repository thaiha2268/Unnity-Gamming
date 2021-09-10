var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("img-slide");
  var dots = document.getElementsByClassName("title-slide");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" title-slide-hover", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " title-slide-hover";
}

// Slide Hot Product

var WidthEachMove =
  document.getElementsByClassName("hot-product-item")[0].clientWidth;
var SlideWillMove = document.getElementsByClassName("hot-product-list")[0];
var numberElement =
  SlideWillMove.getElementsByClassName("hot-product-item").length;
var MaxWidth = WidthEachMove * numberElement;

MaxWidth -= WidthEachMove * 5;
var Chuyen = 0;

document.getElementsByClassName(
  "host-product-button-previous"
)[0].style.display = "none";
var n = numberElement - 5;
function Next() {
  if (n > 0) {
    if (Chuyen < MaxWidth) {
      Chuyen += WidthEachMove;
      n = n - 1;
    }
  } else {
    Chuyen -= WidthEachMove;
    n = n - 1;
    if (n == -(numberElement - 5)) {
      n = numberElement - 5;
    }
  }

  SlideWillMove.style.marginLeft = "-" + Chuyen + "px";
}

// function Next() {
//   if (Chuyen < MaxWidth) {
//     Chuyen += WidthEachMove;

//     if (Chuyen == MaxWidth) {
//         $("#p-hot-1").append("");
//     }
//   }
//   // else {
//   //   Chuyen = 0;

//   // }

//   SlideWillMove.style.marginLeft = "-" + Chuyen + "px";
// }

function Back() {
  if (Chuyen > 0) {
    Chuyen -= WidthEachMove;
    SlideWillMove.style.marginLeft = "-" + Chuyen + "px";
    document.getElementsByClassName(
      "host-product-button-next"
    )[0].style.display = "";
    if (Chuyen == 0) {
      // Chuyen = MaxWidth;
      document.getElementsByClassName(
        "host-product-button-previous"
      )[0].style.display = "none";
    }
  }
}
setInterval(function () {
  Next();
}, 1000);

// Slide Buyer
var WidthEachMove1 =
  document.getElementsByClassName("buyer-tab-item")[1].clientWidth;
var SlideWillMove1 = document.getElementById("buyer-tab-list");
var numberElement1 =
  SlideWillMove1.getElementsByClassName("buyer-tab-item").length;
var MaxWidth1 = WidthEachMove1 * numberElement1;

MaxWidth1 -= WidthEachMove1 * 5;
var Chuyen_1 = 0;

document.getElementById("buyer-tab-btn-back").style.display = "none";

function Next1() {
  if (Chuyen_1 < MaxWidth1) {
    Chuyen_1 += WidthEachMove1;
    document.getElementById("buyer-tab-btn-back").style.display = "";
  } else {
    Chuyen_1 = 0;
  }
  SlideWillMove1.style.marginLeft = "-" + Chuyen_1 + "px";
  // if (Chuyen_1 == MaxWidth1) {
  //   document.getElementById("buyer-tab-btn-next").style.display = "none";
  // }
}

function Back1() {
  if (Chuyen_1 > 0) {
    Chuyen_1 -= WidthEachMove1;
    SlideWillMove1.style.marginLeft = "-" + Chuyen_1 + "px";
    document.getElementById("buyer-tab-btn-next").style.display = "";
    if (Chuyen_1 == 0) {
      // Chuyen_1 = MaxWidth1;
      document.getElementById("buyer-tab-btn-back").style.display = "none";
    }
  }
}
setInterval(function () {
  Next1();
}, 5000);

// Footer

function show_hide() {
  var x = document.getElementById("northern-region-hide");
  if (x.style.display == "none") {
    x.style.display = "block";
    document.getElementsByClassName("region-button")[0].innerText = "ẩn bớt";
  } else {
    x.style.display = "none";
  }
}
function show_hide2() {
  var x = document.getElementById("southen-region-hide");
  if (x.style.display == "none") {
    x.style.display = "block";
    document.getElementsByClassName("region-button")[1].innerText = "ẩn bớt";
  } else {
    x.style.display = "none";
  }
}

// Branche map selecter
var list_branche = document.getElementsByClassName("branche");
var list_map = document.getElementsByClassName("map");

list_branche[0].className += " selector";
list_branche[0].style.borderLeft = "2px solid #0289ff";
list_map[0].style.display = "block";

function selector(index) {
  var className = list_branche[index].className;

  for (let i = 0; i < list_branche.length; i++) {
    if (i == index) {
      if (!className.includes("selecter")) {
        list_branche[index].className += " selector";
        list_branche[index].style.borderLeft = "2px solid #0289ff";

        list_map[index].style.display = "block";
      }
    } else {
      var className2 = list_branche[i].className;
      if (className2.includes("selector")) {
        className2 = className2.replace("selector", "");
        list_branche[i].className = className;
        list_branche[i].style.borderLeft = "2px solid #fff";

        list_map[i].style.display = "none";
      }
    }
  }
}

// Event Cancel button
var layer_hidden = document.getElementsByClassName("layer-hidden")[0];
var item_hidden_list = document.getElementsByClassName("item-hidden");
function openAndExitMap(a, index) {
  if (a == true) {
    layer_hidden.style.display = "block";
    item_hidden_list[index].style.display = "block";

    document.body.className += " noscroll";
  } else {
    layer_hidden.style.display = "none";
    item_hidden_list[index].style.display = "none";

    if (index == -1) {
      for (let i = 0; i < item_hidden_list.length; i++) {
        item_hidden_list[i].style.display = "none";
      }
    }

    if (document.body.className.includes("noscroll")) {
      document.body.className = document.body.className.replace("noscroll", "");
    }
  }
}

// Check advise phone input
function checkPhoneAdvistLayer() {
  var phone = document.getElementById("phone-advise-layer").value;
  var mesText = document.getElementsByClassName("request-mes")[0];
  var btnSubmitAdvisr = document.getElementsByClassName("request-button")[0];

  var erroInputPhone =
    "Vui lòng nhập đúng định dạng số điện thoại. Ví dụ: 0989888456";
  var erroInputPhone2 = "Vui lòng nhập số điện thoại";

  if (phone.trim().length == 0) {
    mesText.innerHTML = erroInputPhone2;

    if (!btnSubmitAdvisr.className.includes("disable-request-button")) {
      btnSubmitAdvisr.className += " disable-request-button";
    }
  } else if (!phone.match(/^\d{10}$/g)) {
    mesText.innerHTML = erroInputPhone;

    if (!btnSubmitAdvisr.className.includes("disable-request-button")) {
      btnSubmitAdvisr.className += " disable-request-button";
    }
  } else if (btnSubmitAdvisr.className.includes("disable-request-button")) {
    mesText.innerHTML = "";
    var a1 = btnSubmitAdvisr.className.replace("disable-request-button", "");

    btnSubmitAdvisr.className = a1;
  }
}


