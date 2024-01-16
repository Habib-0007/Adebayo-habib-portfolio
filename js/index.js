var menuBtn = document.querySelector(".fa");
var navLinks = document.querySelector(".navLinks");

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
