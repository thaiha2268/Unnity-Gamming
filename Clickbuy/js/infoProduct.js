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

// Event Cancel Map button
var layer_hidden = document.getElementsByClassName("layer-hidden")[0];
var item_hidden_list = document.getElementsByClassName("item-hidden");
function openAndExitMap(a, index) {
  if (a == true) {
    layer_hidden.style.display = "block";
    item_hidden_list[index].style.display = "block";
  } else {
    layer_hidden.style.display = "none";
    item_hidden_list[index].style.display = "none";
  }
}
