
// Show and Hide Header
var chevron = document.getElementById("chevron");
var container = document.getElementsByClassName("header__body");
var container2 = document.getElementsByClassName("header__head");

document.addEventListener("click", function (e) {
  for (let i = 0; i < container2.length; i++) {
    if (container2[i].contains(e.target)) {
      if (container[i].style.display == "block") {
        container[i].style.display = "none";
        checkRotate(i);
      } else {
        container[i].style.display = "block";
        checkRotate(i);
      }
    } else if (
      !container[i].contains(e.target) &&
      container[i].style.display == "block"
    ) {
      container[i].style.display = "none";
      checkRotate(i);
    }
  }
});

function checkRotate(index) {
  if (index == 0) {
    if (container[index].style.display == "block") {
      chevron.style.transform = "rotate(" + 180 + "deg)";
    } else {
      chevron.style.transform = "rotate(" + 0 + "deg)";
    }
  }
}

// Show and Hide SideBar
$("#sidebar__burger").click(function () {
  $("#sidebar").toggleClass("active");
  $("#page__wrapper").toggleClass("active");
});

// Switch Dark Mode
const checkBox = document.getElementById("switch__input");

$("#switch__box").click(function () {
  if ($("#switch__input").is(":checked")) {
    $("#switch__btn").css("transform", "translateX(" + -28 + "px)");
    $("#switch__input").prop("checked", false);
  } else {
    $("#switch__btn").css("transform", "translateX(" + 0 + "px)");
    $("#switch__input").prop("checked", true);
  }

  $(".page:first-child").toggleClass("toggle");
});

// Hidden Header
var page = document.getElementsByClassName("page")[0];

window.addEventListener(
  "scroll",
  function (event) {
    const top = this.scrollY;
    if (top <= 96 && page.className.includes("scroll")) {
      page.className = page.className.replace(" scroll", "");
    } else if (top >= 96 && !page.className.includes("scroll")) {
      page.className += " scroll";
    }
  },
  false
);

// Rotate Add Change

// const btnAddChannel = document.getElementById("add_channel");

// btnAddChannel.addEventListener(
//   "click",
//   function (event) {
//     if (index == 0) {
//       if (container[index].style.display == "block") {
//         chevron.style.transform = "rotate(" + 180 + "deg)";
//       } else {
//         chevron.style.transform = "rotate(" + 0 + "deg)";
//       }
//     }
//   },
//   false
// );
