import { React, useState, useEffect } from "react";
import StartScreen from "./Components/StartGame";
import GameScreen from "./Components/GameScreen";
import NavButtons from "./Components/NavButtons";
import Footer from "./Components/Footer";
import { nanoid } from "nanoid";
import { Momentum } from "@uiball/loaders";

function App() {
	const [gameStarted, setGameStarted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [customization, setCustomization] = useState([]);
	const [quizData, setQuizData] = useState([]);
	const [score, setScore] = useState(0);

	const updateCustomization = (num, dif) => {
		setCustomization([num, dif]);
		startGame();
	};

	const startGame = () => {
		setGameStarted(!gameStarted);
		getQuizData();
	};

	const resetGame = () => {
		setGameStarted(!gameStarted);
	};

	function getQuizData() {
		setIsLoading(true);
		setCustomization([10, "easy"]);
		fetch(
			`https://opentdb.com/api.php?amount=${customization[0]}&category=9&type=multiple&difficulty=${customization[1]}&encode=base64`
		)
			.then((response) => response.json())
			.then((data) => {
				setIsLoading(false);
				console.log(data);
				setQuizData(
					data.results.map((quiz) => {
						return {
							question: atob(quiz.question),
							all_answers: [
								atob(quiz.correct_answer),
								...quiz.incorrect_answers.map((ans) => atob(ans))
							],
							correct_answer: atob(quiz.correct_answer),
							current_answer: "",
							is_correct: false,
							id: nanoid()
						};
					})
				);
				console.log(quizData);
			})
			.catch((err) => {
				setIsLoading(false);
				alert("Something went wrong. Please try again.");
				console.error(err);
			});
	}

	function checkAnswers() {
		setQuizData(
			quizData.map((quiz) => {
				if (quiz.current_answer === quiz.correct_answer) {
					quiz.is_correct = true;
				}
				return quiz;
			})
		);
	}

	function updateScore() {
		setScore(quizData.filter((quiz) => quiz.is_correct).length);
	}

	useEffect(() => {
		getQuizData();
	}, []);

	return (
		<main>
			<div className={gameStarted ? "whole-grid" : "center"} id="app">
				<NavButtons />
				{isLoading && (
					<div className="flex-center y-separation">
						<p>Loading...</p>{" "}
						<Momentum
							size={32}
							color={localStorage.getItem("theme") === "dark" ? "white" : "black"}
						/>
					</div>
				)}
				{gameStarted ? (
					<GameScreen
						resetGame={resetGame}
						quizData={quizData}
						checkAnswers={checkAnswers}
						score={score}
						setQuizData={setQuizData}
					/>
				) : (
					<>
						<StartScreen
							updateCustomization={updateCustomization}
							isLoading={isLoading}
						/>

						<Footer />
					</>
				)}
			</div>
		</main>
	);
}

export default App;

// {/* {FIXME: Add Link to Github Repository on NavButtons} */}
