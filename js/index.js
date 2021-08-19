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

$(document).ready(function () {
  // Sort Header
  let page = document.getElementsByClassName("page")[0];
  window.addEventListener(
    "scroll",
    function (event) {
      const top = this.scrollY;
      if (top <= 96 && page.className.includes("scroll")) {
        page.className = page.className.replace(" scroll", "");
      } else if (top >= 96 && !page.className.includes("scroll")) {
        page.className += " scroll";
      }
      if (top > 500) {
        $(".popup_scrollTop").show();
      } else {
        $(".popup_scrollTop").hide();
      }
    },
    false
  );

  $(".popup_scrollTop").click(function () {
    $("html,body").animate({ scrollTop: 0 });
  });
});

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

// Nav Slide
$(document).ready(function mainSlide() {
  let listSlideMain = $(".main__slide");

  let listSlidePreview = $(".main__preview");
  let numberSlide = listSlidePreview.length;
  // console.log(listSlidePreview.width());

  let trackNav = $(".main__nav .slick-track");
  let widthTrackNav = $(".main__nav .slick-track").width();
  // console.log(widthTrackNav / numberSlide);

  listSlidePreview.on("click", function (e) {
    let currentIndex = $(".main__preview").index(
      $(".main__preview.slick-current")
    );
    let clickIndex = $(".main__preview").index($(this));

    changeSelectedSlide(currentIndex, clickIndex);

    changeSelectedSlide(currentIndex, clickIndex);
    // console.log(currentIndex + "," + numberSlide);
  });

  // Event Click Button Slide
  let movement = 0;
  $("#nav-slick-prev").click(function () {
    movement = movement - widthTrackNav / numberSlide;
    trackNav.css({ marginLeft: -movement + "px" });

    let currentIndex = $(".main__preview").index(
      $(".main__preview.slick-current")
    );
    changeSelectedSlide(currentIndex, currentIndex - 1);
  });
  $("#nav-slick-next").click(function () {
    movement = movement + widthTrackNav / numberSlide;
    trackNav.css({ marginLeft: -movement + "px" });

    let currentIndex = $(".main__preview").index(
      $(".main__preview.slick-current")
    );
    changeSelectedSlide(currentIndex, currentIndex + 1);
  });

  function changeSelectedSlide(currentIndex, clickIndex) {
    listSlidePreview.eq(currentIndex).removeClass("slick-current");
    listSlidePreview.eq(clickIndex).addClass("slick-current");

    listSlideMain.eq(currentIndex).removeClass("active");
    listSlideMain.eq(clickIndex).addClass("active");
  }
  function setProcessBar(index, total) {
    let precent = (index / total) * 100;

    $(".main__progress").css("background-size", precent + "%");
  }
});

// Pagination
$(document).ready(function livePagingHandle() {
  // Create DB
  let topics = [
    {
      topic: "live channel",
      cards: [
        {
          cartId: 1,
          title: "2020 World Champs Gamming 1",
          userId: 1,
          game: "Call Of Duty",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-1.png",
        },
        {
          cartId: 2,
          title: "2020 World Champs Gamming 2",
          userId: 2,
          game: "Garena of Valor",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-2.png",
        },
        {
          cartId: 3,
          title: "2020 World Champs Gamming 3",
          userId: 3,
          game: "Garena Free Fire",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-3.png",
        },
        {
          cartId: 4,
          title: "2020 World Champs Gamming 4",
          userId: 4,
          game: "Call Of Duty",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-4.png",
        },
        {
          cartId: 5,
          title: "2020 World Champs Gamming 5",
          userId: 5,
          game: "League of Legends®",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-5.png",
        },
        {
          cartId: 6,
          title: "2020 World Champs Gamming 6",
          userId: 6,
          game: "Fortnite",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-6.png",
        },
        {
          cartId: 7,
          title: "2020 World Champs Gamming 7",
          userId: 7,
          game: "Call Of Duty",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-5.png",
        },
        {
          cartId: 8,
          title: "2020 World Champs Gamming 8",
          userId: 8,
          game: "League of Legends®",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-3.png",
        },
        {
          cartId: 9,
          title: "2020 World Champs Gamming 9",
          userId: 9,
          game: "Fortnite",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-5.png",
        },
        {
          cartId: 10,
          title: "2020 World Champs Gamming 10",
          userId: 10,
          game: "Player Unknown's Battlegrounds",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-1.png",
        },
        {
          cartId: 11,
          title: "2020 World Champs Gamming 11",
          userId: 11,
          game: "Total War",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-6.png",
        },
        {
          cartId: 12,
          title: "2020 World Champs Gamming 12",
          userId: 12,
          game: "Hellblade",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-2.png",
        },
        {
          cartId: 13,
          title: "2020 World Champs Gamming 13",
          userId: 13,
          game: "Battlefield Company 2",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-4.png",
        },
        {
          cartId: 14,
          title: "2020 World Champs Gamming 14",
          userId: 14,
          game: "Call of Duty: Warzone",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-2.png",
        },
        {
          cartId: 15,
          title: "2020 World Champs Gamming 15",
          userId: 15,
          game: "Auto Chess",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-1.png",
        },
        {
          cartId: 16,
          title: "2020 World Champs Gamming 16",
          userId: 16,
          game: "War Robots",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-5.png",
        },
        {
          cartId: 17,
          title: "2020 World Champs Gamming 17",
          userId: 17,
          game: "Survival Heroes",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-3.png",
        },
        {
          cartId: 18,
          title: "2020 World Champs Gamming 18",
          userId: 18,
          game: "Warface Mobile",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-1.png",
        },
        {
          cartId: 19,
          title: "2020 World Champs Gamming 19",
          userId: 19,
          game: "Call Of Duty",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-5.png",
        },
        {
          cartId: 20,
          title: "2020 World Champs Gamming 20",
          userId: 20,
          game: "Garena of Valor",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-5.png",
        },
        {
          cartId: 21,
          title: "2020 World Champs Gamming 21",
          userId: 21,
          game: "Garena Free Fire",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-6.png",
        },
        {
          cartId: 22,
          title: "2020 World Champs Gamming 22",
          userId: 22,
          game: "Call Of Duty",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-3.png",
        },
        {
          cartId: 23,
          title: "2020 World Champs Gamming 23",
          userId: 23,
          game: "League of Legends®",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-1.png",
        },
        {
          cartId: 24,
          title: "2020 World Champs Gamming 24",
          userId: 24,
          game: "Fortnite",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-5.png",
        },
        {
          cartId: 25,
          title: "2020 World Champs Gamming 25",
          userId: 25,
          game: "Call Of Duty",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-2.png",
        },
        {
          cartId: 26,
          title: "2020 World Champs Gamming 26",
          userId: 26,
          game: "League of Legends®",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-5.png",
        },
        {
          cartId: 27,
          title: "2020 World Champs Gamming 27",
          userId: 27,
          game: "Fortnite",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-2.png",
        },
        {
          cartId: 28,
          title: "2020 World Champs Gamming 28",
          userId: 28,
          game: "Player Unknown's Battlegrounds",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-4.png",
        },
        {
          cartId: 29,
          title: "2020 World Champs Gamming 29",
          userId: 29,
          game: "Total War",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-3.png",
        },
        {
          cartId: 30,
          title: "2020 World Champs Gamming 30",
          userId: 30,
          game: "Hellblade",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-5.png",
        },
        {
          cartId: 31,
          title: "2020 World Champs Gamming 31",
          userId: 31,
          game: "Battlefield Company 2",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-1.png",
        },
        {
          cartId: 32,
          title: "2020 World Champs Gamming 32",
          userId: 32,
          game: "Call of Duty: Warzone",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-2.png",
        },
        {
          cartId: 33,
          title: "2020 World Champs Gamming 33",
          userId: 33,
          game: "Auto Chess",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-6.png",
        },
        {
          cartId: 34,
          title: "2020 World Champs Gamming 34",
          userId: 34,
          game: "War Robots",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-2.png",
        },
        {
          cartId: 35,
          title: "2020 World Champs Gamming 35",
          userId: 35,
          game: "Survival Heroes",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-5.png",
        },
        {
          cartId: 36,
          title: "2020 World Champs Gamming 36",
          userId: 36,
          game: "Warface Mobile",
          view: "1.2k watching",
          background:
            "https://ui8-unity-gaming.herokuapp.com/img/card-pic-6.png",
        },
      ],
    },

    {
      topic: "Recomment Video",
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

  let users = [
    {
      userId: 1,
      name: "Thai Ha 1",
      confirm: false,
      ava: "",
    },
    {
      userId: 2,
      name: "Thai Ha 2",
      confirm: true,
      ava: "",
    },
    {
      userId: 3,
      name: "Thai Ha 3",
      confirm: true,
      ava: "",
    },
    {
      userId: 4,
      name: "Thai Ha 4",
      confirm: false,
      ava: "",
    },
    {
      userId: 5,
      name: "Thai Ha 5",
      confirm: false,
      ava: "",
    },
    {
      userId: 6,
      name: "Thai Ha 6",
      confirm: true,
      ava: "",
    },
    {
      userId: 7,
      name: "Thai Ha 7",
      confirm: true,
      ava: "",
    },
    {
      userId: 8,
      name: "Thai Ha 8",
      confirm: false,
      ava: "",
    },
    {
      userId: 9,
      name: "Thai Ha 9",
      confirm: false,
      ava: "",
    },
    {
      userId: 10,
      name: "Thai Ha 10",
      confirm: true,
      ava: "",
    },
    {
      userId: 11,
      name: "Thai Ha 11",
      confirm: true,
      ava: "",
    },
    {
      userId: 12,
      name: "Thai Ha 12",
      confirm: false,
      ava: "",
    },
    {
      userId: 13,
      name: "Thai Ha 13",
      confirm: false,
      ava: "",
    },
    {
      userId: 14,
      name: "Thai Ha 14",
      confirm: true,
      ava: "",
    },
    {
      userId: 15,
      name: "Thai Ha 15",
      confirm: true,
      ava: "",
    },
    {
      userId: 16,
      name: "Thai Ha 16",
      confirm: false,
      ava: "",
    },
    {
      userId: 17,
      name: "Thai Ha 17",
      confirm: false,
      ava: "",
    },
    {
      userId: 18,
      name: "Thai Ha 18",
      confirm: true,
      ava: "",
    },
    {
      userId: 19,
      name: "Thai Ha 19",
      confirm: true,
      ava: "",
    },
    {
      userId: 20,
      name: "Thai Ha 02",
      confirm: false,
      ava: "",
    },
    {
      userId: 21,
      name: "Thai Ha 21",
      confirm: false,
      ava: "",
    },
    {
      userId: 22,
      name: "Thai Ha 22",
      confirm: true,
      ava: "",
    },
    {
      userId: 23,
      name: "Thai Ha 23",
      confirm: true,
      ava: "",
    },
    {
      userId: 24,
      name: "Thai Ha 24",
      confirm: false,
      ava: "",
    },
    {
      userId: 25,
      name: "Thai Ha 25",
      confirm: false,
      ava: "",
    },
    {
      userId: 26,
      name: "Thai Ha 26",
      confirm: true,
      ava: "",
    },
    {
      userId: 27,
      name: "Thai Ha 27",
      confirm: true,
      ava: "",
    },
    {
      userId: 28,
      name: "Thai Ha 28",
      confirm: false,
      ava: "",
    },
    {
      userId: 29,
      name: "Thai Ha 29",
      confirm: false,
      ava: "",
    },
    {
      userId: 30,
      name: "Thai Ha 30",
      confirm: true,
      ava: "",
    },
    {
      userId: 31,
      name: "Thai Ha 32",
      confirm: true,
      ava: "",
    },
    {
      userId: 33,
      name: "Thai Ha 33",
      confirm: false,
      ava: "",
    },
    {
      userId: 34,
      name: "Thai Ha 34",
      confirm: false,
      ava: "",
    },
    {
      userId: 35,
      name: "Thai Ha 35",
      confirm: true,
      ava: "",
    },
    {
      userId: 36,
      name: "Thai Ha 36",
      confirm: true,
      ava: "",
    },
  ];

  // get Title Collection
  topics.forEach(function getTitleCollection(topicItem, index) {
    switch (index) {
      case 0: {
        // console.log(topicItem.topic);
        $(".collection__title").eq(index).text(topicItem.topic);
        break;
      }
      case 1: {
        // console.log(topicItem.topic);
        $(".collection__title").eq(index).text(topicItem.topic);

        break;
      }
    }
  });

  // get Info Cards
  function getCardsByIndexpage(indexPage, indexTopics) {
    topics.forEach(function (topicItem, index) {
      if (index == indexTopics) {
        let arrCard = topicItem.cards;

        let indexPageInt = parseInt(indexPage) - 1;
        let startNum = indexPageInt * 4;
        let endNum = (indexPageInt + 1) * 4;

        let j = 0;

        for (let i = startNum; i < endNum; i++) {
          let cartId = arrCard[i].cartId;
          let title = arrCard[i].title;
          let userId = arrCard[i].userId;
          let game = arrCard[i].game;
          let view = arrCard[i].view;
          let background = arrCard[i].background;

          let user = users.map(getInfoUser);

          function getInfoUser(user) {
            if (user.userId == userId) {
              $(".collection_live .card__man").eq(j).text(user.name);

              if (user.confirm == true) {
                $(".collection_live .card__ava").eq(j).addClass("confirm");
              }
            }
          }

          $(".collection_live .card__title").eq(j).text(title);
          $(".collection_live .card__game").eq(j).text(game);
          $(".collection_live .card__status").eq(j).text(view);
          $(".collection_live .card__preview .card__pic")
            .eq(j)
            .attr("src", background);

          j++;
        }
      }
    });
  }

  let numberCardsInPage = 4;
  let minValue = 1;
  let maxValue = 0;

  topics.forEach(function (topicItem, index) {
    if (index == 0) {
      let arrCard = topicItem.cards;
      maxValue = arrCard.length / 4;
    }
  });

  $("#live_collection__paging .paging__child.last-child").text(maxValue);
  $(".input_last_child").attr({
    value: maxValue,
  });

  // if(max )
  let middleValue = 5;

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

  $(".live_paging__btn").val([minValue]);

  // set value for Input Number type
  $("#paging__scroll").attr({
    max: maxValue - 1,
    min: middleValue + 1,
    value: middleValue + 1,
  });

  // Input Index
  $("#paging__scroll").on("input", function () {
    let value = parseInt($("#paging__scroll").val());
    if (value < middleValue + 1 || value > maxValue - 1) {
      $(".mes_invalid").text("Input number between 6 - " + (maxValue - 1));
      $(".mes_invalid").show();
    } else {
      $(".mes_invalid").hide();

      // TODO : Get Card by index Page
    }
    hiddenBtn();
  });

  // click to each index
  $(".live_paging__btn").click(function () {
    let index = $("input[name='live_paging']:checked").val();
    $(".live__paging_index").removeClass("active");

    // console.log(index); // TODO get DB
    getCardsByIndexpage(index, 0);
    hiddenBtn();
  });

  // click button left
  $("#live_paging_al").click(function downPageIndex() {
    let value = parseInt($(".live_paging__btn:checked").val());

    if (Number.isInteger(value) && value > 1) {
      let newValue = value - 1;

      if (value == maxValue) {
        $(".live_paging__btn").val([""]);
        $(".live__paging_index").addClass("active");
        $("#paging__scroll").val([newValue]);
        getCardsByIndexpage(newValue, 0);
      } else {
        $(".live_paging__btn").val([newValue]);
        getCardsByIndexpage(newValue, 0);
      }

      // console.log(newValue); // TODO get DB

      // TODO : get topics from DB with value are index Page
    } else if (Number.isNaN(value)) {
      // Value is NAN
      $(".live_paging__btn").val([""]);
      $(".live__paging_index").addClass("active");

      let newValue = parseInt($("#paging__scroll").val()) - 1;

      if (newValue > middleValue && newValue < maxValue) {
        $("#paging__scroll").val([newValue]);
        getCardsByIndexpage(newValue, 0);
      } else {
        $(".live_paging__btn").val([newValue]);
        $(".live__paging_index").removeClass("active");
        getCardsByIndexpage(newValue, 0);
      }

      // console.log(newValue); // TODO get DB
    }
    hiddenBtn();
  });

  // click button right
  $("#live_paging_ar").click(function upPageIndex() {
    let value = parseInt($(".live_paging__btn:checked").val()) + 1;

    if (Number.isInteger(value)) {
      if (value <= middleValue || value == maxValue) {
        $(".live_paging__btn").val([value]);
        getCardsByIndexpage(value, 0);
      } else if (value == middleValue + 1) {
        $(".live_paging__btn").val([""]);
        $(".live__paging_index").addClass("active");
        $("#paging__scroll").val([middleValue + 1]);
        getCardsByIndexpage(value, 0);
      }

      // console.log(value); // TODO get DB
    } else {
      // Value is NAN

      let newValue = parseInt($("#paging__scroll").val()) + 1;

      if (newValue > middleValue && newValue < maxValue) {
        $("#paging__scroll").val([newValue]);
        getCardsByIndexpage(newValue, 0);
      } else {
        $(".live_paging__btn").val([newValue]);
        $(".live__paging_index").removeClass("active");
        getCardsByIndexpage(newValue, 0);
      }

      // console.log(newValue); // TODO get DB
    }
    hiddenBtn();
  });

  function hiddenBtn() {
    let newValue = parseInt($(".live_paging__btn:checked").val());
    if (newValue == minValue) {
      $("#live_paging_al").hide();
      $("#live_paging_ar").show();
    } else if (newValue == maxValue) {
      $("#live_paging_ar").hide();
      $("#live_paging_al").show();
    } else {
      $("#live_paging_al").show();
      $("#live_paging_ar").show();
    }
  }

  $("#live_paging_al").hide();
});

// Show and Hide Stories
$(document).ready(function () {
  let numberStory = $(".stories__item").length;
  // let listStory = $(".stories__item");
  // let widthStory = $(".stories__list").width() / 3;
  // let widthListStory = numberStory * widthStory;
  // let movement = 0;

  let cf = true;

  let check;
  let check2;
  let check3;
  let check4;

  function createItem(number) {
    let itemStr = '<div class="stories__item scale">';

    // { Timeline
    itemStr += '<div class="stories__timelines">';
    let timelineTemp = "";
    for (let i = 0; i < number; i++) {
      timelineTemp +=
        '<div class="stories__timeline"><div class="stories__timeline_fill"></div></div>';
    }

    itemStr += timelineTemp;
    itemStr += "</div>";
    // }

    // { User
    itemStr += '<div class="stories__user">';

    let avaTemp =
      '<div class="stories__ava"><img src="https://ui8-unity-gaming.herokuapp.com/img/ava-1.png" alt=""></div>';
    itemStr += avaTemp;

    let desTemp =
      '<div class="stories__des"><div class="stories__name">Zao Lil</div><div class="stories__cate">Call of Duty</div></div>';
    itemStr += desTemp;

    itemStr += "</div>";
    // }

    // { Action
    itemStr += '<div class="stories__actions">';
    let actionTemp =
      '<div class="stories__react"><ion-icon name="magnet"></ion-icon></div>';
    actionTemp += '<div class="stories__emoticons">';

    let actionLike =
      '<div class="stories__emoticon stories__like"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e4299734559659.56d57de04bda4.gif" alt=""></div>';
    let actionTym =
      '<div class="stories__emoticon stories__tym"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/65ea2034559659.56d57de06cea2.gif" alt=""></div>';
    let actionHaha =
      '<div class="stories__emoticon stories__haha"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35c9bf34559659.56d57de0eb467.gif" alt=""></div>';
    let actionWow =
      '<div class="stories__emoticon stories__wow"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/6105c734559659.56d59c54f0d05.gif" alt=""></div>';
    let actionSad =
      '<div class="stories__emoticon stories__sad"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/3eee1d34559659.56d59de621daa.gif" alt=""></div>';
    let actionAngry =
      '<div class="stories__emoticon stories__angry"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e66e6e34559659.56d57de095aee.gif" alt=""></div>';

    let inputTemp =
      '<input class="stories__input" type="text" name="" placeholder="Send a message..."><div class="stories__btn_send button btn_purple">Send</div>';

    actionTemp += actionLike;
    actionTemp += actionTym;
    actionTemp += actionHaha;
    actionTemp += actionWow;
    actionTemp += actionSad;
    actionTemp += actionAngry;
    actionTemp += "</div>";
    actionTemp += inputTemp;
    actionTemp += "</div>";

    itemStr += actionTemp;
    // }

    // { Child
    let childTemp = '<div class="stories__childs">';

    for (let i = 0; i < number; i++) {
      if (i == 0) {
        childTemp +=
          '<div class="stories__child active" style="background-image: url(https://ui8-unity-gaming.herokuapp.com/img/game-pic-';
        childTemp += Math.floor(Math.random() * 3 + 1);
        childTemp += '.png);"><img src="" alt=""></div>';
      } else {
        childTemp +=
          '<div class="stories__child" style="background-image: url(https://ui8-unity-gaming.herokuapp.com/img/card-pic-';
        childTemp += Math.floor(Math.random() * 3 + 1);
        childTemp += '.png);"><img src="" alt=""></div>';
      }
    }

    childTemp += "</div>";
    itemStr += childTemp;
    // }

    itemStr += "\n</div>";

    return itemStr;
  }

  // let item = createItem(3);
  // console.log(item);

  let arrStory = [];
  let indexActive = 3;

  for (let i = 0; i < 7; i++) {
    let newItem = createItem(Math.floor(Math.random() * 10 + 1));
    $(".stories__list").append(newItem);
    $(".stories__item").eq(i).removeClass("scale");
    $(".stories__item").eq(indexActive).addClass("active");
  }

  function nextStory() {
    let numberItemChild = Math.floor(Math.random() * 10 + 1);

    let promise = new Promise((resolve, reject) => {
      resolve();
    });

    promise
      .then(() => {
        let newItem = createItem(numberItemChild);
        $(".stories__list").append(newItem);
      })

      .then(() => {
        let listStory = $(".stories__item");

        listStory.removeClass("active center");
        listStory.eq(indexActive).addClass("active center");

        listStory.eq(0).addClass("scale");
      });

    // .then(() => {
    //   cf = true;
    // })

    // .then(() => {
    //   activeTimeLine(0);
    // });

    $(".stories__item:last-child").removeClass("scale");

    $(".stories__item").eq(0).remove();
  }

  function activeTimeLine(startIndex) {
    let timelineFill = $(".stories__item.active .stories__timeline_fill");
    let storyChild = $(".stories__item.active .stories__child");
    let numberTimelineFill = timelineFill.length;
    let numStoryChild = storyChild.length;
    let n = 0;

    if (numberTimelineFill == numStoryChild) {
      for (let i = startIndex; i <= numberTimelineFill; i++) {
        check3 = setTimeout(() => {
          if (cf == false) {
            clearTimeout(check3);
          } else {
            timelineFill.eq(i).addClass("active");

            if (i != startIndex) {
              storyChild.eq(i).addClass("active");
            }

            check4 = setTimeout(() => {
              if (cf == false) {
                clearTimeout(check4);
              } else {
                timelineFill.eq(i).removeClass("active");
                if (i != numberTimelineFill - 1) {
                  storyChild.eq(i).removeClass("active");
                }
              }
              // if (i == numberTimelineFill) {
              //   nextStory();
              // }
            }, 4980);
          }
        }, 5000 * i);
      }

      n = 5000 * numberTimelineFill;
    }

    return n;
  }

  function showStories(){
    clearTimeout(check);
    clearTimeout(check2);

    // cf = false;

    let promise = Promise.resolve()

      .then(() => {
        return new Promise((resolve, reject) => {
          let numberChildItem = $(
            ".stories__item.active .stories__child"
          ).length;
          let indexItemChildActive =
            $(".stories__item.active .stories__child").index(
              $(".stories__item.active .stories__child.active")
            ) + 1;

          if (indexItemChildActive == numberChildItem) {
            resolve("nextStory"); // last index
          } else {
            resolve(indexItemChildActive);
          }
        });
      })

      .then((value) => {
        return new Promise((resolve, reject) => {
          clearTimeout(check3);
          clearTimeout(check4);
          nextStory();
          resolve();
          // if (value == "nextStory") {
          // } else {
          //   clearTimeout(check3);
          //   clearTimeout(check4);
          //   console.log("promist : " + value);
            // cf = true;
            // activeTimeLine(value);
          // }
        });
      })

      .then(() => {
        $(
          ".stories__item:nth-child(" + indexActive + ") .stories__child"
        ).addClass("active hidden");
        $(
          ".stories__item:nth-child(" +
            indexActive +
            ") .stories__child:last-child"
        ).removeClass("hidden");

        cf = true;
        run();
      })
      .catch(() => {});
  }

  function run() {
    if (cf == true) {
      let delayTime = activeTimeLine(0);

      check = setTimeout(nextStory, delayTime);

      delay = delayTime;

      check2 = setTimeout(run, delayTime + 100);
    }
  }

  run();

  $(".stories__btn_next").click(function () {
    showStories();
  });

  $(".stories__btn_prev").click(function () {
    clearTimeout(check);
    clearTimeout(check2);

    cf = false;

    let promise = Promise.resolve()

      .then(() => {
        return new Promise((resolve, reject) => {
          nextStory();
          clearTimeout(check3);
          clearTimeout(check4);
          resolve();
        });
      })
      .then(() => {
        $(
          ".stories__item:nth-child(" + indexActive + ") .stories__child"
        ).addClass("active hidden");
        $(
          ".stories__item:nth-child(" +
            indexActive +
            ") .stories__child:last-child"
        ).removeClass("hidden");

        cf = true;
        run();
      });
  });

  $(".header__stories").click(function () {
    $(".stories").addClass("active");
      showStories();
  });
  $(".stories__bg, .stories__btn_close").click(function () {
    $(".stories").removeClass("active");
    // $(".stories__list").css({ marginLeft: "0px" });
    // $(".stories__item.active").removeClass("active center");
    // listStory.eq(1).addClass("active center");
  });

  // $(".stories__btn_next").click(function () {
  //   let activeStory = $(".stories__item.active");

  //   if (
  //     numberStory > 3 &&
  //     movement <= widthListStory - $(".stories__list").width()
  //   ) {
  //     let indexStoryActive = listStory.index(activeStory);

  //     activeStory.removeClass("active center");
  //     listStory.eq(indexStoryActive + 1).addClass("active center");

  //     movement += widthStory;

  //     $(".stories__list").css({ marginLeft: -movement + "px" });
  //   }
  // });

  // $(".stories__btn_prev").click(function () {
  //   let activeStory = $(".stories__item.active");

  //   if (numberStory > 3 && movement >= 0) {
  //     let indexStoryActive = listStory.index(activeStory);

  //     activeStory.removeClass("active center");
  //     listStory.eq(indexStoryActive - 1).addClass("active center");

  //     movement -= widthStory;

  //     $(".stories__list").css({ marginLeft: -movement + "px" });
  //   }
  // });
});
