import { React, useState, useEffect } from "react";
import { nanoid } from "nanoid";
import StartScreen from "./Components/StartScreen";
import Loading from "./Helpers/Loading";
import GameScreen from "./Components/GameScreen";
import NavButtons from "./Components/NavButtons";
import Footer from "./Components/Footer";

function App() {
	const [gameStarted, setGameStarted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [customization, setCustomization] = useState([]);
	const [quizData, setQuizData] = useState([]);
	// const [score, setScore] = useState(0);

	const updateCustomization = (numQuestions, category, difficulty) => {
		setCustomization([numQuestions, category, difficulty]);
		startGame();
	};

	const startGame = () => {
		setGameStarted(!gameStarted);
	};

	useEffect(() => {
		setIsLoading(true);
		setCustomization([10, "easy"]);
		fetch(
			`https://opentdb.com/api.php?amount=${customization[0]}&category=${customization[1]}&type=multiple&difficulty=${customization[2]}&encode=base64`
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
							].sort(() => Math.random() - 0.5),
							correct_answer: atob(quiz.correct_answer),
							current_answer: "",
							is_correct: false,
							id: nanoid()
						};
					})
				);
			})
			.catch((err) => {
				setIsLoading(false);
				alert("Something went wrong. Please try again.");
				console.error(err);
			});
	}, [gameStarted]);

	function chooseAnswer(answer, targetId) {
		setQuizData(
			quizData.map((question) => {
				if (question.id === targetId) {
					return {
						...question,
						current_answer: answer,
						is_correct: answer === question.correct_answer
					};
				} else {
					return question;
				}
			})
		);
		console.log(quizData);
	}

	// function checkAnswers() {
	// 	setQuizData(
	// 		quizData.map((quiz) => {
	// 			if (quiz.current_answer === quiz.correct_answer) {
	// 				quiz.is_correct = true;
	// 			}
	// 			return quiz;
	// 		})
	// 	);
	// }

	// function updateScore() {
	// 	setScore(quizData.filter((quiz) => quiz.is_correct).length);
	// }

	return (
		<main>
			<div className={gameStarted ? "whole-grid" : "center"} id="app">
				<NavButtons />
				{isLoading && <Loading />}

				{/* Initial Screen & Customization */}
				{!gameStarted && <StartScreen updateCustomization={updateCustomization} />}

				{/* Game Screen */}
				{gameStarted && (
					<GameScreen
						startGame={startGame}
						quizData={quizData}
						chooseAnswer={chooseAnswer}
						// checkAnswers={checkAnswers}
						// score={score}
						// setQuizData={setQuizData}
					/>
				)}
				<Footer />
			</div>
		</main>
	);
}

export default App;

// {/* {FIXME: Add Link to Github Repository on NavButtons} */}
// 		{gameStarted ? (
// 			<GameScreen
// 				startGame={startGame}
// 				quizData={quizData}
// 				checkAnswers={checkAnswers}
// 				score={score}
// 				setQuizData={setQuizData}
// 			/>
// 		) : (
// 			<>
// 				<StartScreen updateCustomization={updateCustomization} />
// 				<Footer />
// 			</>
// 		)}
// 	</div>
// </main>
