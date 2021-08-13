// Show and Hide Header

$(document).ready(function () {
  $("#head_browse").click(function () {
    if ($("#body_browse").css("display") == "none") {
      $("#chevron").css({ transform: "rotate(" + 180 + "deg)" });
    } else {
      $("#chevron").css({ transform: "rotate(" + 0 + "deg)" });
    }

    showAndHideBody("browse");
  });

  $(".header__search_show_btn").click(function () {
    $(".header__body").hide();
    $("#head_search").toggleClass("hidden");
  });
  // $("#head_search").click(function () {
  //   showAndHideBody("search");
  // });
  $("#head_item-add").click(function () {
    showAndHideBody("item-add");
  });
  $("#head_item-noti").click(function () {
    showAndHideBody("item-noti");
  });
  $("#head_user").click(function () {
    showAndHideBody("user");
  });

  function showAndHideBody(bodyID) {
    $(".header__body:not(#body_" + bodyID + ")").hide();
    $("#head_search").removeClass("hidden");
    $("#body_" + bodyID).toggle();
  }
});

// Sort Header
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

// Show and Hide SideBar
$(document).ready(function () {
  $("#sidebar__buger_dots").click(function () {
    $("#sidebar").toggleClass("active");
    $("#page__wrapper").toggleClass("active");
  });
  $("#sidebar__buger_close").click(function () {
    $("#sidebar").removeClass("hidden");
  });
  $("#showSidebar_btn").click(function () {
    $("#sidebar").toggleClass("hidden");

    if ($(window).width() < 768) {
      checkDisplaySb();
    }
  });

  function checkDisplaySb() {
    if ($("#sidebar").hasClass("hidden")) {
      $("html").css("overflow", "hidden");
    } else {
      $("html").css("overflow", "auto");
    }
  }

  $(window).resize(function () {
    if ($(window).width() >= 768) {
      if ($("#sidebar").hasClass("hidden")) {
        $("html").css("overflow", "auto");
        $("#sidebar").removeClass("hidden");
      }
    } else if ($(window).width() <= 401) {
    }
  });
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

// Pagination
$(document).ready(function livePagingHandle() {
  let topics = [
    {
      topic: "live channel",
      cards: [
        {
          cartId: 1,
          title: "2020 World Champs Gamming",
          userId: 1,
          game: "Call Of Duty",
          view: "1.2k watching",
        },
        {
          cartId: 1,
          title: "2020 World Champs Gamming",
          userId: 1,
          game: "Call Of Duty",
          view: "1.2k watching",
        },
        {
          cartId: 1,
          title: "2020 World Champs Gamming",
          userId: 1,
          game: "Call Of Duty",
          view: "1.2k watching",
        },
        {
          cartId: 1,
          title: "2020 World Champs Gamming",
          userId: 1,
          game: "Call Of Duty",
          view: "1.2k watching",
        },
        {
          cartId: 1,
          title: "2020 World Champs Gamming",
          userId: 1,
          game: "Call Of Duty",
          view: "1.2k watching",
        },
        {
          cartId: 1,
          title: "2020 World Champs Gamming",
          userId: 1,
          game: "Call Of Duty",
          view: "1.2k watching",
        },
        {
          cartId: 1,
          title: "2020 World Champs Gamming",
          userId: 1,
          game: "Call Of Duty",
          view: "1.2k watching",
        },
        {
          cartId: 1,
          title: "2020 World Champs Gamming",
          userId: 1,
          game: "Call Of Duty",
          view: "1.2k watching",
        },
        {
          cartId: 1,
          title: "2020 World Champs Gamming",
          userId: 1,
          game: "Call Of Duty",
          view: "1.2k watching",
        },
        {
          cartId: 1,
          title: "2020 World Champs Gamming",
          userId: 1,
          game: "Call Of Duty",
          view: "1.2k watching",
        },
        {
          cartId: 1,
          title: "2020 World Champs Gamming",
          userId: 1,
          game: "Call Of Duty",
          view: "1.2k watching",
        },
        {
          cartId: 1,
          title: "2020 World Champs Gamming",
          userId: 1,
          game: "Call Of Duty",
          view: "1.2k watching",
        },
        {
          cartId: 1,
          title: "2020 World Champs Gamming",
          userId: 1,
          game: "Call Of Duty",
          view: "1.2k watching",
        },
        {
          cartId: 1,
          title: "2020 World Champs Gamming",
          userId: 1,
          game: "Call Of Duty",
          view: "1.2k watching",
        },
        {
          cartId: 1,
          title: "2020 World Champs Gamming",
          userId: 1,
          game: "Call Of Duty",
          view: "1.2k watching",
        },
        {
          cartId: 1,
          title: "2020 World Champs Gamming",
          userId: 1,
          game: "Call Of Duty",
          view: "1.2k watching",
        },
        {
          cartId: 1,
          title: "2020 World Champs Gamming",
          userId: 1,
          game: "Call Of Duty",
          view: "1.2k watching",
        },
        {
          cartId: 1,
          title: "2020 World Champs Gamming",
          userId: 1,
          game: "Call Of Duty",
          view: "1.2k watching",
        },
      ],
    },

    {
      topic: "live channel",
      cards: [
        {
          cartId: 1,
          title: "2020 World Champs Gamming",
          userId: 1,
          game: "Call Of Duty",
          view: "1.2k watching",
        },
        {
          cartId: 1,
          title: "2020 World Champs Gamming",
          userId: 1,
          game: "Call Of Duty",
          view: "1.2k watching",
        },
        {
          cartId: 1,
          title: "2020 World Champs Gamming",
          userId: 1,
          game: "Call Of Duty",
          view: "1.2k watching",
        },
        {
          cartId: 1,
          title: "2020 World Champs Gamming",
          userId: 1,
          game: "Call Of Duty",
          view: "1.2k watching",
        },
        {
          cartId: 1,
          title: "2020 World Champs Gamming",
          userId: 1,
          game: "Call Of Duty",
          view: "1.2k watching",
        },
        {
          cartId: 1,
          title: "2020 World Champs Gamming",
          userId: 1,
          game: "Call Of Duty",
          view: "1.2k watching",
        },
      ],
    },
  ];

  let numberCardsInPage = 4;
  let minValue = 1;
  let middleValue = 5;
  let maxValue = 20;

  $(window).resize(function () {
    if ($(window).width() <= 601) {
      $(".paging__item3,.paging__item4,.paging__item5").hide();
      middleValue = 2;
      $("#paging__scroll").attr({
        value: middleValue + 1,
      });
    } else {
      $(".paging__item3,.paging__item4,.paging__item5").show();
      middleValue = 5;
      $("#paging__scroll").attr({
        value: middleValue + 1,
      });
    }
  });

  $("#paging__scroll").on("input", function () {
    let value = parseInt($("#paging__scroll").val());
    if (value < middleValue + 1 || value > maxValue - 1) {
      $(".mes_invalid").text("Input number between 6 - " + (maxValue - 1));
      $(".mes_invalid").show();
    } else {
      $(".mes_invalid").hide();

      // TODO : Get Card by index Page
    }
  });

  $(".live_paging__btn").val([minValue]);

  $("#paging__scroll").attr({
    max: maxValue - 1,
    min: middleValue + 1,
    value: middleValue + 1,
  });

  $(".live_paging__btn").click(function () {
    console.log($("input[name='live_paging']:checked").val());
    $(".live__paging_index").removeClass("active");
    // BUG _ DONE
  });

  $("#live_paging_al").click(function downPageIndex() {
    let value = parseInt($(".live_paging__btn:checked").val());
    // console.log(value);

    if (Number.isInteger(value) && value > 1) {
      let newValue = value - 1;

      if (value == maxValue) {
        $(".live_paging__btn").val([""]);
        $(".live__paging_index").addClass("active");
        $("#paging__scroll").val([newValue]);
      } else {
        $(".live_paging__btn").val([newValue]);
        // console.log(newValue);
      }

      // TODO : get topics from DB with value are index Page
    } else if (Number.isNaN(value)) {
      // Value is NAN
      $(".live_paging__btn").val([""]);
      $(".live__paging_index").addClass("active");

      let newValue = parseInt($("#paging__scroll").val()) - 1;

      // console.log(newValue);

      if (newValue > middleValue && newValue < maxValue) {
        $("#paging__scroll").val([newValue]);
        // console.log(newValue);
        // TODO : get Cards from DB with value are index Page
      } else {
        $(".live_paging__btn").val([newValue]);
        $(".live__paging_index").removeClass("active");
      }
    }
  });

  $("#live_paging_ar").click(function upPageIndex() {
    let value = parseInt($(".live_paging__btn:checked").val()) + 1;
    // console.log(value);

    if (Number.isInteger(value)) {
      if (value <= middleValue || value == maxValue) {
        $(".live_paging__btn").val([value]);
        // console.log(value);
      } else if (value == middleValue + 1) {
        // console.log(value);
        $(".live_paging__btn").val([""]);
        $(".live__paging_index").addClass("active");
        $("#paging__scroll").val([middleValue + 1]);
      }

      // TODO : get Cards from DB with value are index Page
    } else {
      // Value is NAN

      let newValue = parseInt($("#paging__scroll").val()) + 1;

      // console.log(newValue);

      if (newValue > middleValue && newValue < maxValue) {
        $("#paging__scroll").val([newValue]);

        // TODO : get Cards from DB with value are index Page
      } else {
        // console.log("bbbbbbbbbbbb");

        $(".live_paging__btn").val([newValue]);
        $(".live__paging_index").removeClass("active");
      }
    }
  });

  function getCardsByIndexpage() {}
});

// $(document).ready(function recommentPagingHandle() {
//   let minValue = 1;
//   let maxValue = 5;

//   $("[name=recomment_paging]").val([minValue]);

//   $(".recomment_paging__btn").click(function () {
//     console.log($("input[name='recomment_paging']:checked").val());
//   });

//   $("#recomment_paging_al").click(function downPageIndex() {
//     let value = parseInt($("input[name='recomment_paging']:checked").val());

//     if (value > 1) {
//       $("[name=recomment_paging]").val([value - 1]);
//     }
//   });

//   $("#recomment_paging_ar").click(function upPageIndex() {
//     let value = parseInt($("input[name='recomment_paging']:checked").val());

//     if (value < maxValue) {
//       $("[name=recomment_paging]").val([value + 1]);
//     }
//   });
// });
