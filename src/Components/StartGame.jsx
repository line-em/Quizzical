import { React, useState } from "react";

function StartScreen(props) {
	/*Show Customization*/
	const [isCustomizationHidden, setIsCustomizationHidden] = useState(true);
	const toggleCustomize = () => setIsCustomizationHidden(!isCustomizationHidden);

	const customizeStyles = {
		opacity: isCustomizationHidden ? 0 : 1,
		height: isCustomizationHidden ? 0 : "auto",
		visibility: isCustomizationHidden ? "hidden" : "visible",
		padding: isCustomizationHidden ? 0 : "var(--small) 0 var(--base) 0",
		margin: isCustomizationHidden ? 0 : "var(--base) 0"
	};

	/*Customization*/
	const [numOfQuestions, setNumOfQuestions] = useState("10");
	const [difficulty, setDifficulty] = useState("easy");

	const handleNumOfQuestions = (e) => {
		console.log(numOfQuestions);
		setNumOfQuestions(e.target.value);
	};

	const handleDifficulty = (e) => {
		console.log(difficulty);
		setDifficulty(e.target.value);
	};

	return (
		<section className="start-screen">
			<h1>Quizzical</h1>
			<button className="accent-button" role="button" onClick={toggleCustomize}>
				Customize Game
			</button>
			<button
				className="start-button"
				role="button"
				onClick={() => props.updateCustomization(numOfQuestions, difficulty)}
			>
				Start Game
			</button>

			<div style={customizeStyles} className="customize-container">
				<h2>Customize Game</h2>
				<label htmlFor="num-of-questions">Number of Questions: {numOfQuestions}</label>
				<input
					type="range"
					name="num-of-questions"
					id="num-of-questions"
					min="5"
					max="20"
					step={1}
					onChange={handleNumOfQuestions}
					value={numOfQuestions}
				/>

				<label htmlFor="difficulty">Difficulty:</label>
				<select id="difficulty" onChange={handleDifficulty}>
					<option value="easy">Easy</option>
					<option value="medium">Medium</option>
					<option value="hard">Hard</option>
				</select>
			</div>
		</section>
	);
}

export default StartScreen;
