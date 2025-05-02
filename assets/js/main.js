/* OVERLAY MENU REVEAL ANIMATION */
$(document).ready(() => {
  let animation = gsap.timeline({ paused: true, reversed: true });
  animation
    .to("header", { opacity: 0, duration: 0.5, ease: "power2.out" })
    .to(
      ".cover",
      { height: "100vh", duration: 0.5, ease: "power2.out" },
      "-=0.1"
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

$(document).ready(function () {
  // Pulsating shadow on menu icon
  gsap.to("#menuOpen", {
    boxShadow: "0 0 20px 5px rgba(255,255,255,0.6)",
    repeat: -1,
    yoyo: true,
    duration: 1.1,
    ease: "power1.inOut",
  });

  // Animate.css pulse on smiling woman
  $(".wangari-maathai").addClass(
    "animate__animated animate__pulse animate__pulse-infinite"
  );

  // Hover behavior for grayscale and speech bubble
  $(".wangari-maathai").hover(
    function () {
      // Remove grayscale
      $(this).css("filter", "grayscale(0%)");
      // Show speech bubble
      $(".eluid-text").fadeIn(300);
      // Stop pulse animation
      $(this).removeClass("animate__pulse animate__pulse-infinite");
    },
    function () {
      // Add grayscale back
      $(this).css("filter", "grayscale(100%)");
      // Hide speech bubble
      $(".eluid-text").fadeOut(300);
      // Resume pulse animation
      $(this).addClass("animate__pulse animate__pulse-infinite");
    }
  );

  // Apply Animate.css pulse animation to all .pulse-image elements
  $(".pulse-image").addClass(
    "animate__animated animate__pulse animate__pulse-infinite"
  );

  // Hover interaction to remove grayscale and pulse on hover
  $(".pulse-image").hover(
    function () {
      $(this).css("filter", "grayscale(0%)");
      $(this).removeClass("animate__pulse animate__pulse-infinite");
    },
    function () {
      $(this).css("filter", "grayscale(100%)");
      $(this).addClass("animate__pulse animate__pulse-infinite");
    }
  );

  // Ripples effect on background
  $("#ripple-area").ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.03,
  });

  /* CUSTOM CURSOR POINTER */
  $(document).ready(() => {
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");
    let pulseImages = document.querySelectorAll(".pulse-image");
    let overlayLinks = document.querySelectorAll(".overlay-links a");
    const menuOpen = document.querySelector("#menuOpen");
    const wangari = document.querySelector(".wangari-maathai");
    const logo = document.querySelector(".logo");

    window.addEventListener("mousemove", (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      //cursorOutline.style.left = `${posX}px`;
      //cursorOutline.style.top = `${posY}px`;

      cursorOutline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 300, fill: "forwards" }
      );
    });

    //Enlarge the cursor outline when hovering the links below
    pulseImages.forEach((img) => {
      img.addEventListener("mousemove", () => {
        cursorOutline.classList.add("grow");
      });
      img.addEventListener("mouseleave", () => {
        cursorOutline.classList.remove("grow");
      });
    });

    overlayLinks.forEach((ova) => {
      ova.addEventListener("mousemove", () => {
        cursorOutline.classList.add("grow");
      });
      ova.addEventListener("mouseleave", () => {
        cursorOutline.classList.remove("grow");
      });
    });

    menuOpen.addEventListener("mousemove", () => {
      cursorOutline.classList.add("grow");
    });
    menuOpen.addEventListener("mouseleave", () => {
      cursorOutline.classList.remove("grow");
    });

    wangari.addEventListener("mousemove", () => {
      cursorOutline.classList.add("grow");
    });
    wangari.addEventListener("mouseleave", () => {
      cursorOutline.classList.remove("grow");
    });

    logo.addEventListener("mousemove", () => {
      cursorOutline.classList.add("grow");
    });

    logo.addEventListener("mouseleave", () => {
      cursorOutline.classList.remove("grow");
    });
  });
});
