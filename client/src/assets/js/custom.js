(function ($) {
  "use strict";
  $(document).ready(function () {
    /* HORIZONTAL CARD IMAGES */
    var cardImages = function () {
      $("body")
        .find(".card-horizontal-right")
        .each(function () {
          if ($(this).attr("data-img")) {
            var card_img = $(this).data("img");
            $(this).css("background-image", 'url("' + card_img + '")');
          }
        });
    };

    /* GO TO TOP BUTTON */
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 300) {
        $("#booklub-gototop").css("bottom", 0);
      } else {
        $("#booklub-gototop").css("bottom", "-50px");
      }
    });

    $("#booklub-gototop").on("click", function (e) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        500
      );
      return false;
    });

    /* FULLSCREEN SEARCH */
    $("#booklub-open-search").on("click", function (e) {
      e.preventDefault();
      $("#booklub-fullscreen-search").fadeIn(200);
    });

    $("#booklub-close-search").on("click", function (e) {
      e.preventDefault();
      $("#booklub-fullscreen-search").fadeOut(200);
    });

    /* MAIN MENU */
    $("#booklub-main-menu")
      .find(".booklub-menu-ul > li > a")
      .on("click", function () {
        var nxtLink = $(this).next();
        if (nxtLink.is("ul") && nxtLink.is(":visible")) {
          nxtLink.slideUp(300);
          $(this).removeClass("booklub-menu-up").addClass("booklub-menu-down");
        }
        if (nxtLink.is("ul") && !nxtLink.is(":visible")) {
          $("#booklub-main-menu")
            .find(".booklub-menu-ul > li > ul:visible")
            .slideUp(300);
          nxtLink.slideDown(300);
          $("#booklub-main-menu")
            .find(".booklub-menu-ul > li:has(ul) > a")
            .removeClass("booklub-menu-up")
            .addClass("booklub-menu-down");
          $(this).addClass("booklub-menu-up");
        }
        if (nxtLink.is("ul")) {
          return false;
        } else {
          return true;
        }
      });

    /* MOBILE MENU */
    $("#booklub-menu-toggle").on("click", function () {
      $("#booklub-social-cell,#booklub-main-menu").toggle();
    });
  });
})(jQuery);
