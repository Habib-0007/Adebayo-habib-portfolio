const Navbar = () => {
	return (
		<nav className="hide">
			<a href="#home">Home</a>
			<a href="#about">About</a>
			<a href="#skills">Skills</a>
			<a href="#projects">Projects</a>
			<a href="#contact">Contact</a>
		</nav>
	);
};

const Header = () => {
	return (
		<header>
			<h1>HA</h1>
			<Navbar />
			<button className="menu-bar">&#9776;</button>
		</header>
	);
};

export default Header;
