import { React, useState } from "react";
import { Sun, Moon, GithubLogo, IconContext } from "phosphor-react";

function NavButtons() {
	// DARK OR LIGHT MODE //
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") || window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light"
	);

	const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

	if (theme === "dark") {
		document.documentElement.setAttribute("data-theme", "dark");
		localStorage.setItem("theme", "dark");
	} else {
		document.documentElement.setAttribute("data-theme", "light");
		localStorage.setItem("theme", "light");
	}

	return (
		<>
			<IconContext.Provider value={{ size: 24, weight: "fill", color: "var(--white)" }}>
				<button onClick={toggleTheme} className="theme-button" aria-hidden="true">
					{theme === "dark" ? <Sun /> : <Moon />}
				</button>
				{/* {FIXME: Add Link to Github Repository} */}
				<button className="git-button">
					<GithubLogo />
				</button>
			</IconContext.Provider>
		</>
	);
}

export default NavButtons;
