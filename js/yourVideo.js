let jsCheckBoxAll = document.getElementsByClassName("checkbox__all")[0];
let jsCheckBoxItem = document.getElementsByClassName("checkbox__item");
let numberCheckBoxItem = jsCheckBoxItem.length;
let jsVideo = document.getElementsByClassName("video");
let numberCheckedBoxItem = 0;

jsCheckBoxAll.addEventListener("click", function (e) {
  let checkboxAllChecked = jsCheckBoxAll.checked;

  for (let i = 0; i < numberCheckBoxItem; i++) {
    jsCheckBoxItem[i].checked = checkboxAllChecked;

    switch (checkboxAllChecked) {
      case true:
        if (!jsVideo[i].className.includes("active")) {
          jsVideo[i].className += " active";

          ++numberCheckedBoxItem;
        }

        break;

      case false:
        if (jsVideo[i].className.includes("active")) {
          jsVideo[i].className = jsVideo[i].className.replace(" active", "");

          --numberCheckedBoxItem;
        }

        break;
    }
  }
});

for (let i = 0; i < numberCheckBoxItem; i++) {
  jsCheckBoxItem[i].addEventListener("click", function (e) {
    let checkboxItemChecked = jsVideo[i].className.includes("active");

    switch (checkboxItemChecked) {
      case true:
        jsVideo[i].className = jsVideo[i].className.replace(" active", "");

        --numberCheckedBoxItem;
        break;

      case false:
        jsVideo[i].className += " active";

        ++numberCheckedBoxItem;
        break;
    }

    if (numberCheckedBoxItem == numberCheckBoxItem) {
      jsCheckBoxAll.checked = true;
    } else {
      jsCheckBoxAll.checked = false;
    }
  });
}

// Select View
let jsCatalogListView = document.getElementsByClassName("list_view")[0];
let jsCatalogGridView = document.getElementsByClassName("grid_view")[0];
let jsCatalogView = document.getElementsByClassName("catalog__view");
let jsCatalog = document.getElementsByClassName("catalog")[0];

jsCatalogListView.addEventListener("click", function (e) {
  if (!jsCatalogListView.className.includes("active")) {
    jsCatalogListView.classList.add("active");
    jsCatalogGridView.classList.remove("active");

    jsCatalog.classList.add("view");
  }
});
jsCatalogGridView.addEventListener("click", function (e) {
  if (!jsCatalogGridView.className.includes("active")) {
    jsCatalogGridView.classList.add("active");
    jsCatalogListView.classList.remove("active");

    jsCatalog.classList.remove("view");
  }
});


// 
$(window).resize(function () {
  if ($(window).width() < 1260) {
    if ($(".catalog").hasClass("view")) {
      $(".catalog").removeClass("view");
      jsCatalogGridView.classList.add("active");
    jsCatalogListView.classList.remove("active");
    }
  } 
});

