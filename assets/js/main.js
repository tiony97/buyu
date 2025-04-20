/* LIGHT/DARK THEME TOGGLER */
$(document).ready(() => {
	//Store darkmode in Local Storage
	let darkMode = localStorage.getItem("darkMode");

	//Function to enable darkmode
	const enableDarkMode = () => {
		$("body").addClass("darkTheme");
		$("#themeToggler").html('<i class="fas fa-lightbulb"></i>');
		localStorage.setItem("darkMode", "enabled");
		console.log("Dark Mode Enabled");
	};

	//Function to disable darkmode
	const disableDarkMode = () => {
		$("body").removeClass("darkTheme");
		$("#themeToggler").html('<i class="fas fa-moon"></i>');
		localStorage.setItem("darkMode", null);
		console.log("Dark Mode Disabled");
	};

	//Check if darkmode is enabled when page loads
	if (darkMode === "enabled") {
		enableDarkMode();
	}

	//Click Event
	$("#themeToggler").click(() => {
		darkMode = localStorage.getItem("darkMode");

		if (darkMode !== "enabled") {
			enableDarkMode();
		} else {
			disableDarkMode();
		}
	});
});

/* FIX MENU TO TOP 
$(document).ready(function () {
	var header = $("nav");
	var scrollHeight = 70; // Scroll height in pixels after which the header becomes fixed

	$(window).scroll(function () {
		if ($(this).scrollTop() > scrollHeight) {
			header.addClass("nav-fixed");
		} else {
			header.removeClass("nav-fixed");
		}
	});
});*/

/* SCROLL TO TOP */
$(document).ready(() => {
	//Hide the button
	$("#scrollToTop").hide();

	//Check to see if the window is at start; if not don't show btn
	$(window).scroll(() => {
		if ($(this).scrollTop() > 100) {
			$("#scrollToTop").fadeIn();
		} else {
			$("#scrollToTop").fadeOut();
		}
	});

	//Click Event to scroll to top
	$("#scrollToTop").click(() => {
		$("html, body").animate({ scrollTop: 0 }, 360);
		return false;
	});
});

/* CUSTOM CURSOR POINTER */
$(document).ready(() => {
	const cursorDot = document.querySelector("[data-cursor-dot]");
	const cursorOutline = document.querySelector("[data-cursor-outline]");
	let links = document.querySelectorAll("a");
	let titles = document.querySelectorAll("h1");
	const menuOpen = document.querySelector("#menuOpen");
	const menuClose = document.querySelector("#menuClose");
	const themeToggle = document.querySelector("#themeToggler");
	const scrollTop = document.querySelector("#scrollToTop");

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
	links.forEach((link) => {
		link.addEventListener("mousemove", () => {
			cursorOutline.classList.add("grow");
		});
		link.addEventListener("mouseleave", () => {
			cursorOutline.classList.remove("grow");
		});
	});
	titles.forEach((title) => {
		title.addEventListener("mousemove", () => {
			cursorOutline.classList.add("grow");
		});
		title.addEventListener("mouseleave", () => {
			cursorOutline.classList.remove("grow");
		});
	});
	menuOpen.addEventListener("mousemove", () => {
		cursorOutline.classList.add("grow");
	});
	menuOpen.addEventListener("mouseleave", () => {
		cursorOutline.classList.remove("grow");
	});
	menuClose.addEventListener("mousemove", () => {
		cursorOutline.classList.add("grow");
	});
	menuClose.addEventListener("mouseleave", () => {
		cursorOutline.classList.remove("grow");
	});
	themeToggle.addEventListener("mousemove", () => {
		cursorOutline.classList.add("grow");
	});
	themeToggle.addEventListener("mouseleave", () => {
		cursorOutline.classList.remove("grow");
	});
	scrollTop.addEventListener("mousemove", () => {
		cursorOutline.classList.add("grow");
	});
	scrollTop.addEventListener("mouseleave", () => {
		cursorOutline.classList.remove("grow");
	});
});

/* OVERLAY MENU REVEAL ANIMATION */
$(document).ready(() => {
	let animation = gsap.timeline({ paused: true, reversed: true });
	animation
		.to("nav", { opacity: 0, duration: 0.5, ease: "power2.out" })

		.to(".home-banner", { opacity: 0, duration: 0.5 }, "-=.2")

		.to(".overlay-menu", { height: "100vh", duration: 1, ease: "power2.in" }, "-=.1")

		.to(".overlay-links a", {
			opacity: 1,
			duration: 0.5,
			stagger: { each: 0.1, ease: "power1.in" },
		})
		.from(".overlay-cta", { opacity: 0, duration: 0.5, ease: "power2.out" })

		.to("nav", { opacity: 1, duration: 0.5, ease: "power2.out" });

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

/* SWIPER JS SWIPERS */
$(document).ready(() => {
	//Project Swiper
	var swiper1 = new Swiper(".projectSwiper", {
		effect: "slide",
		grabCursor: true,
		slidesPerView: 2.2,
		spaceBetween: 50,
		loop: false,

		scrollbar: {
			el: ".swiper-scrollbar",
		},
	});

	//Menu Swiper
	var swiper2 = new Swiper(".menuSwiper", {
		effect: "slide",
		grabCursor: true,
		slidesPerView: 2.5,
		spaceBetween: 0,
		loop: false,
		scrollbar: {
			el: ".swiper-scrollbar",
		},
	});
});

/* Faq Accordion */
$(document).ready(function () {
	// Start with all accordion content hidden
	$(".accordion-content").hide();

	$(".accordion-header").on("click", function () {
		const $item = $(this).parent();
		const $content = $item.find(".accordion-content");

		// If this item is already active, close it
		if ($item.hasClass("active")) {
			$item.removeClass("active");
			$content.slideUp(); // Smoothly close
		} else {
			// Close all other active items
			$(".accordion-item").removeClass("active");
			$(".accordion-content").slideUp(); // Smoothly close all other contents

			// Open the clicked item
			$item.addClass("active");
			$content.slideDown(); // Smoothly open the clicked item
		}
	});
});
