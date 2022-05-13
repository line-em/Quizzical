import React from "react";
import { Sun, Moon, GithubLogo, IconContext } from "phosphor-react";

function NavButtons() {
	const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const html = document.documentElement;

	const [theme, setTheme] = useState(preference ? "dark" : "light");
	const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

	if (theme === "dark") {
		html.setAttribute("data-theme", "dark");
	} else {
		html.setAttribute("data-theme", "light");
	}

	return (
		<>
			<IconContext.Provider value={{ size: 24, weight: "fill", color: "var(--white)" }}>
				<button onClick={toggleTheme} className="theme-button">
					{theme === "dark" ? <Sun /> : <Moon />}
				</button>
				<button className="git-button">
					<GithubLogo />
				</button>
			</IconContext.Provider>
		</>
	);
}

export default NavButtons;
