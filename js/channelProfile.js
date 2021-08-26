$(document).ready(() => {
  let linkVideosAPI = "http://localhost:3000/videos";
  let linkUserAPI = "http://localhost:3000/users";
  let linkGameAPI = "http://localhost:3000/games";
  let counterIndex = 0;
  let numVideoInOnePage = 2;

  function eventCheckBox(ex) {
    $(".video").click((e) => {
      if (e.target.closest(".video__action_coopyLink")) {
        let copyText = `html/watching.html?videoId=${e.target.id}`;
        navigator.clipboard.writeText(copyText);

        let color = "green";
        let linkIcon = '<ion-icon name="checkmark-outline"></ion-icon>';
        let title = "Coop Successfuly";
        let detail = "Coopy Link Video Successfuly in Clipboard";
        let actions = ``;

        popupMessage(color, linkIcon, title, detail, actions);
      }
      //   else if (e.target.closest(".checkbox__item")) {

      //   }

      e.stopImmediatePropagation();
    });
  }
  async function getUserIdByUrl() {
    let url = new URL(document.URL);
    let search_params = url.searchParams;

    let uD = search_params.get("userId");
    return uD;
  }
  async function getListUsers() {
    try {
      let res = await fetch(linkUserAPI);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }
  async function getListGames() {
    try {
      let res = await fetch(linkGameAPI);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }
  function htmlVideo(video, game) {
    let html = `<div class="video video_line" >
        <div class="video__preview"
            style="background-image: url(${video.background});">
    
            <div class="video__time">${video.totalTime}</div>
    
            <div class="video__line">
                <div class="video__process" style="width: 65%;"></div>
            </div>
    
        </div>
    
        <div class="video__details">
            <div class="video__title">${video.title}</div>
    
            <div class="video__status">
                <div class="status video__views">${video.viewers} views</div>
                <div class="status video__date">${video.publishedDate}</div>
            </div>
    
            <a href="html/playlist.html?gameId=${game.gameId}" class="game">
                <div class="game__logo"><img
                        src="${game.gameThumbnail}"
                        alt="" class="game__pic"></div>
                <div class="game__text">${game.name}®</div>
            </a>
    
            <div class="video__actions">
                <a href="/watching.html?videoId=${video.videoId}" class="video__action">
                    <ion-icon name="eye-outline"></ion-icon>
                </a>
                <button class="video__action video__action_coopyLink" >
                    <ion-icon name="link-outline" class="abc" id="${video.videoId}"></ion-icon>
                </button>
                <button class="video__action">
                    <ion-icon name="share-social-outline"></ion-icon>
                </button>
                <button class="video__action">
                <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                </button>
    
            </div>
        </div>
    </div>`;

    $(".catalog__list").append(html);
    eventCheckBox();
  }

  async function getVideoCollections() {
    try {
      let res = await fetch(linkVideosAPI);
      return await res.json();
    } catch (error) {
      console.log(error);

      let color = "red";
      let linkIcon = '<ion-icon name="warning-outline"></ion-icon>';
      let title = "Load Video Collection Failed";
      let detail = "Link API Video Collection broken";
      let actions = ``;

      popupMessage(color, linkIcon, title, detail, actions);
    }
  }
  async function getListCards(videoCollections, indexPage) {
    let uD = await getUserIdByUrl();

    let listVideos = videoCollections.filter((video) => {
      return video.userId == uD;
    });

    let numVideos = listVideos.length;

    $(".author__videos").text(`${numVideos} videos`);

    let startNum = indexPage * numVideoInOnePage;
    let endNum = (indexPage + 1) * numVideoInOnePage;

    let newListVideos = [];
    listVideos.forEach((video, index) => {
      if (index >= startNum && index < endNum) {
        newListVideos.push(video);
      }
    });

    return newListVideos;
  }
  async function renderCards(newVideosList) {
    let games = await getListGames();

    newVideosList.forEach(function (card, index) {
      let gD = card.cateGameId;

      let game = games.find((game) => {
        return game.gameId == gD;
      });

      htmlVideo(card, game);
    });
  }

  async function renderDetailChannel() {
    let users = await getListUsers();

    // Render Info This User
    let uD = await getUserIdByUrl();
    let user = users.find((user) => {
      return user.userId == uD;
    });

    $(".author__ava .ava__img").prop("src", `${user.avata}`);
    if (user.status == true) {
      $(".author__ava").addClass("active");
    }

    $(".author__name").text(user.name);
    if (user.confirm == true) {
      $(".author__name").addClass("confirm");
    }

    $(".author__followers").text(`${user.followers} followers`);

    // Get confirm Following

    let myId = 37;
    let myUser = users.find((user) => {
      return user.userId == myId;
    });

    let isFollowing = myUser.following.some((id) => {
      return id == uD;
    });

    if (isFollowing) {
      $(".action__follow.followed").addClass("active");
      $(".action__follow.unfollowed").removeClass("active");
    }
  }
  async function renderVideosByIndexPage(indexPage) {
    let videoCollections = await getVideoCollections();

    let newCardsList = await getListCards(videoCollections, indexPage);

    await renderCards(newCardsList);

    let uD = await getUserIdByUrl();
    let listVideos = videoCollections.filter((video) => {
      return video.userId == uD;
    });

    let numVideoInPage = $(".catalog__list .video").length;
    if (numVideoInPage == listVideos.length) {
      $(".catalog__btn_load").text("that's all");
      $(".catalog__btn_load").attr("disabled", true);
      $(".catalog__btn_load").addClass("off");
    }

    ++counterIndex;
  }

  renderVideosByIndexPage(0);
  renderDetailChannel();

  $(".catalog__btn_load").click(() => {
    renderVideosByIndexPage(counterIndex);
  });

  //   Event Click Catalog Link
  $(".catalog__nav").on("click", ".catalog__link", function (e) {
    let indexClick = $(this).index(".catalog__link");
    let currentIndex = $(".catalog__link").index(".catalog__link.active");

    if (indexClick != currentIndex) {
      $(".catalog__link").removeClass("active");
      $(".catalog__link").eq(indexClick).addClass("active");
      console.log(indexClick);
    }
  });

  $(".author__action.btn_square").click((e) => {
    let btn_followed = $(".action__follow.followed");
    let btn_unfollowed = $(".action__follow.unfollowed");

    if (btn_followed.hasClass("active")) {
      // un follow
      btn_followed.removeClass("active");
      btn_unfollowed.addClass("active");
    } else {
      btn_unfollowed.removeClass("active");
      btn_followed.addClass("active");
    }
  });
});
