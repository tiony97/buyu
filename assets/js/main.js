/* OVERLAY MENU REVEAL ANIMATION */
$(document).ready(() => {
  let animation = gsap.timeline({ paused: true, reversed: true });
  animation
    .to("header", { opacity: 0, duration: 0.5, ease: "power2.out" })
    .to(
      ".center-piece",
      { opacity: 0, duration: 0.5, ease: "power2.out" },
      "-=0.2"
    )
    .to(
      ".overlay-menu",
      {
        opacity: 1,
        visibility: "visible",
        pointerEvents: "all",
        duration: 0.6,
        ease: "power2.in",
      },
      "-=0.1"
    )

    .to(".overlay-links a", {
      opacity: 1,
      duration: 0.5,
      stagger: { each: 0.1, ease: "power3.in" },
    });

  $("#menuOpen").click(() => {
    animation.play();

    setTimeout(() => {
      $("body").addClass("hideScroll");
      $("#menuOpen").fadeOut();
      $("#menuClose").attr("style", "display: flex !important");
    }, 1000);
  });

  $("#menuClose").click(() => {
    animation.reverse();

    setTimeout(() => {
      $("body").removeClass("hideScroll");
      $("#menuOpen").fadeIn();
      $("#menuClose").fadeOut();
    }, 1000);
  });

  $(".overlay-menu a").click(() => {
    animation.reverse();
    setTimeout(() => {
      $("body").removeClass("hideScroll");
    }, 2500);
  });
});
