const skillsList = () => {
	var data = [
		{
			id: 1,
			name: "HTML",
			icon: "fa-html5",
		},
		{
			id: 2,
			name: "CSS",
			icon: "fa-css3",
		},
		{
			id: 3,
			name: "JavaScript",
			icon: "fa-js",
		},
		{
			id: 4,
			name: "React",
			icon: "fa-react",
		},
		{
			id: 5,
			name: "Less",
			icon: "fa fa-less",
		},
		{
			id: 6,
			name: "SCSS",
			icon: "fa-sass",
		},
		{
			id: 7,
			name: "Git",
			icon: "fa-git"
		},
		{
			id: 8,
			name: "Github",
			icon: "fa-github"
		},
	];

	return data;
};

const Skills = () => {
	var data = skillsList();
	return (
		<section className="skills">
			<h1>Skills &#128333;</h1>
			<section class="skills-content">
				{data.map(value => (
					<div key={value.id}>
						<i className={`fab ${value.icon}`}></i>
						<p>{value.name}</p>
					</div>
				))}
			</section>
		</section>
	);
};

export default Skills;
