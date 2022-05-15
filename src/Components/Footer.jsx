import React from "react";

function Footer() {
	return (
		<footer>
			<p className="subtitle" role="note">
				Powered by{" "}
				<a
					href="https://opentdb.com"
					target="_blank"
					rel="noopener noreferrer"
					alt="Link to Open Trivia API"
					role={"link"}
				>
					Open Trivia API
				</a>
			</p>
			<p className="subtitle" role="note">
				Coded with 💚 by{" "}
				<a
					href="https://github.com/line-em"
					target="_blank"
					rel="noopener noreferrer"
					alt="Link to Open Trivia API"
					role={"link"}
				>
					@Line-em.
				</a>
			</p>
		</footer>
	);
}

export default Footer;
