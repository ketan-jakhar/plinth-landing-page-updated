// Media Query to toggle title
const mediaQuery = window.matchMedia("(max-width: 767px)");

const title = (event) => {
	const titleHead = document.querySelector(".title-header");
	if (event.matches) {
		// If media query matches
		titleHead.innerHTML = '<span class="title-head-bold">Plinth 2023</span>';
	} else {
		titleHead.innerHTML =
			'<span class="title-head-bold">Plinth 2023</span> |\
            <small>Techno-Management Fest</small>';
	}
};

mediaQuery.addEventListener("change", title);

title(mediaQuery);

// Navbar Toggler (Hamburger)

document.querySelector(".toggle-button").addEventListener("click", () => {
	document.querySelector(".toggle-icon-new").classList.toggle("open");
});
