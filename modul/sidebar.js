

// Show and Hide SideBar
function showAndHideSidebarJs() {
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
}

// Load Following List
function loadFollowingListJs() {
  let usersApi = "http://localhost:3000/following";
  let counter = 0;

  function getUsers(indexPage) {
    fetch(usersApi)
      .then((api) => {
        return new Promise((resolve, reject) => {
          resolve(api.json());
          reject();
        });
      })

      .then((users) => {
        if (indexPage == -1) {
          $(".sidebar__group .sidebar__list .sidebar__item").remove();

          let listUsers = users.map((user, index) => {
            return `<a href="${user.id}" class="sidebar__item ${
              user.status == false ? "" : "online"
            }">
                <div class="sidebar__ava">
                  <img class="ava-image" src="${user.avata}"
                  alt="" class="sidebar__pic">
                </div>
                <div class="sidebar__name">${user.name}</div>
              </a>`;
          });

          listUsers.join("");

          $(".sidebar__group .sidebar__list").append(listUsers);

          $(".sidebar__group .sidebar__list").scrollTop(
            $(".sidebar__group .sidebar__list")[0].scrollHeight
          );
        } else if (counter * 6 < users.length) {
          let listUsers = users.map((user, index) => {
            if (index >= indexPage * 6 && index <= (indexPage + 1) * 6 - 1) {
              return `<a href="${user.id}" class="sidebar__item ${
                user.status == false ? "" : "online"
              }">
                <div class="sidebar__ava">
                  <img class="ava-image" src="${user.avata}"
                  alt="" class="sidebar__pic">
                </div>
                <div class="sidebar__name">${user.name}</div>
              </a>`;
            }
          });

          listUsers.join("");

          $(".sidebar__group .sidebar__list").append(listUsers);

          $(".sidebar__group .sidebar__list").scrollTop(
            $(".sidebar__group .sidebar__list")[0].scrollHeight
          );
          ++counter;
        } else {
          let linkIcon = '<ion-icon name="hand-right-outline"></ion-icon>';
          let title = "Can't get more";
          let detail = "Loaded all the people who are following";
          let actions = `<div class="pm__action purple">View All Following</div>
                            <div class="pm__action">Not now</div>`;

          popupMessage(linkIcon, title, detail, actions);
        }
      })

      .catch((err) => {
        console.log(err);
        let linkIcon = '<ion-icon name="hand-right-outline"></ion-icon>';
        let title = "Load Following Failed";
        let detail = "Link API Following broken";
        let actions = ``;

        popupMessage(linkIcon, title, detail, actions);
      });
  }

  getUsers(counter);

  $(".sidebar__more").click(function () {
    getUsers(counter);
  });

  $(".popup_mes__bg, .popup_mes__btn").click(function () {
    $(".popup__message").hide();
  });
}

// Switch Dark Mode
function switchDarkModeJs() {
  let isDarkMode = JSON.parse(localStorage.getItem("isDarkMode"));
  if (isDarkMode == true && $("#switch__input").is(":checked") == false) {
    $("#switch__btn").css("transform", "translateX(" + 0 + "px)");
    $("#switch__input").prop("checked", true);
    $(".page:first-child").removeClass("toggle");
  } else if (
    isDarkMode == false &&
    $("#switch__input").is(":checked") == true
  ) {
    $("#switch__btn").css("transform", "translateX(" + -28 + "px)");
    $("#switch__input").prop("checked", false);
    $(".page:first-child").addClass("toggle");
  }

  $("#switch__box").click(function () {
    switchDarkMode();
  });

  function switchDarkMode() {
    if ($("#switch__input").is(":checked")) {
      $("#switch__btn").css("transform", "translateX(" + -28 + "px)");
      $("#switch__input").prop("checked", false);

      isDarkMode = false;
    } else {
      $("#switch__btn").css("transform", "translateX(" + 0 + "px)");
      $("#switch__input").prop("checked", true);

      isDarkMode = true;
    }

    $(".page:first-child").toggleClass("toggle");

    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }
}

// export const loadFollowingListJs;
// export const switchDarkModeJs;
export default showAndHideSidebarJs;