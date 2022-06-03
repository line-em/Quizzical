import { React, useState } from "react";

function StartScreen({ updateCustomization }) {
	/*Show Customization*/
	const [isCustomizationHidden, setIsCustomizationHidden] = useState(true);
	/*Customization*/
	const [numOfQuestions, setNumOfQuestions] = useState("10");
	const [difficulty, setDifficulty] = useState("easy");
	const [category, setCategory] = useState("9");

	const customizeStyles = {
		opacity: isCustomizationHidden ? 0 : 1,
		height: isCustomizationHidden ? 0 : "auto",
		visibility: isCustomizationHidden ? "hidden" : "visible",
		padding: isCustomizationHidden ? 0 : "var(--small) 0 var(--base) 0",
		margin: isCustomizationHidden ? 0 : "var(--base) 0"
	};

	return (
		<section className="start-screen">
			<h1>Quizzical</h1>
			<button
				className="accent-button"
				role="button"
				onClick={(e) => setIsCustomizationHidden(!isCustomizationHidden)}
			>
				Customize
			</button>
			<button
				className="start-button"
				role="button"
				onClick={() => updateCustomization(numOfQuestions, category, difficulty)}
			>
				Start Quiz
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
					onChange={(e) => setNumOfQuestions(e.target.value)}
					value={numOfQuestions}
				/>

				<label htmlFor="difficulty">Difficulty:</label>
				<select id="difficulty" onChange={(e) => setDifficulty(e.target.value)}>
					<option value="easy">Easy</option>
					<option value="medium">Medium</option>
					<option value="hard">Hard</option>
				</select>

				<label htmlFor="category">Category:</label>
				<select id="category" onChange={(e) => setCategory(e.target.value)}>
					<option value="9">General Knowledge</option>
					<option value="10">Entertainment: Books</option>
					<option value="11">Entertainment: Film</option>
					<option value="12">Entertainment: Music</option>
					<option value="13">Entertainment: Musicals &amp; Theatres</option>
					<option value="14">Entertainment: Television</option>
					<option value="15">Entertainment: Video Games</option>
					<option value="16">Entertainment: Board Games</option>
					<option value="17">Science &amp; Nature</option>
					<option value="18">Science: Computers</option>
					<option value="19">Science: Mathematics</option>
					<option value="20">Mythology</option>
					<option value="21">Sports</option>
					<option value="22">Geography</option>
					<option value="23">History</option>
					<option value="24">Politics</option>
					<option value="25">Art</option>
					<option value="26">Celebrities</option>
					<option value="27">Animals</option>
					<option value="28">Vehicles</option>
					<option value="29">Entertainment: Comics</option>
					<option value="30">Science: Gadgets</option>
					<option value="31">Entertainment: Japanese Anime &amp; Manga</option>
					<option value="32">Entertainment: Cartoon &amp; Animations</option>
				</select>
			</div>
		</section>
	);
}

export default StartScreen;
