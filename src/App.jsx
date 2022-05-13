import { React, useState } from "react";
import { StartGame } from "./Components/StartGame";
import NavButtons from "./Components/NavButtons";

function App() {
	return (
		<main>
			<div className="App">
				<NavButtons />
				<StartGame />
			</div>
		</main>
	);
}

export default App;
