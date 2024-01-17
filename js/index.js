var menuBtn = document.querySelector(".fa");
var navLinks = document.querySelector(".navLinks");
var projectsList = document.querySelector(".projects-list");

var projects = [
	{
		project_name: "Bookmark Landing Page",
		github_url: "",
		url: "https://bookmark-landing-page-jet-one.vercel.app",
		img: "./images/bookmark.jpg",
		description:
			"This is a	simple bookmark landing page width a flexible display and awesomd accordion"
	},
	{
		project_name: "Tyc Tak To",
		github_url: "",
		url: "https://tyc-tak-to.vercel.app",
		img: "./images/tyctakto.jpg",
		description:
			"This is a tic tac toe game that allows two player to play, it has a smooth UI"
	},
	{
		project_name: "Muvvies",
		github_url: "",
		url: "https://muvvies-hng-project-two.vercel.app",
		img: "./images/muvvies.jpg",
		description:
			"This is an IMDB-like website that displays top rated videos, it supports searching videos and there is also a video trailer"
	},
	{
		project_name: "Draggable Image Gallery",
		github_url: "",
		url: "https://draggg-sortable.vercel.app",
		img: "./images/drag.jpg",
		description:
			"This is a a draggable image gallery that supports authentication (login	basically) using	auth0"
	},
	{
		project_name: "Soffcal",
		github_url: "",
		url: "https://soffcal.netlify.app",
		img: "./images/soffcal.jpg",
		description:
			"This is a simple calculator for determining Quadratic equation and	Simultaneous equation (both 2 and 3 unknown"
	}
];

projects.forEach(project => {
	let proj = document.createElement("div");
	proj.classList.add("proj");
	proj.innerHTML = `<img src="${project.img}" alt="${project.project_name}" load="lazy" />
	 <h2>${project.project_name}</h2>
	 <p>${project.description}</p>
	`;
	projectsList.appendChild(proj);
});

var toggleNav = () => {
	navLinks.classList.toggle("show");
	if (menuBtn.classList.contains("fa-bars")) {
		menuBtn.classList.remove("fa-bars");
		menuBtn.classList.add("fa-multiply");
	} else {
		menuBtn.classList.remove("fa-multiply");
		menuBtn.classList.add("fa-bars");
	}
};

menuBtn.addEventListener("click", toggleNav);

menuBtn.addEventListener("click", toggleNav);
