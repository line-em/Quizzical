import { React } from "react";

function QuestionBox({
	disabled,
	current_answer,
	chooseAnswer,
	question,
	all_answers,
	correct_answer,
	is_correct,
	id
}) {
	const handleStyles = (choice) => {
		let feedbackColor = null;
		let opacity = 1;

		if (disabled && current_answer === choice) {
			is_correct ? (feedbackColor = "var(--green)") : (feedbackColor = "var(--red-wrong)");
		} else if (current_answer === choice) {
			feedbackColor = "var(--teal)";
		} else if (disabled && current_answer !== choice) {
			opacity = 0.7;
		}
		return {
			backgroundColor: feedbackColor,
			opacity: opacity
		};
	};

	const choices = all_answers.map((choice) => {
		return (
			<button
				className="choice-button"
				style={handleStyles(choice)}
				role="button"
				key={choice}
				id={choice}
				onClick={() => chooseAnswer(choice, id)}
				disabled={disabled}
			>
				{disabled && correct_answer === choice ? "✔ " : ""}
				{choice}
			</button>
		);
	});

	return (
		<section className="question-container">
			<p className="question" id={id}>
				{question}
			</p>
			<article className="button-container">{choices}</article>
		</section>
	);
}

export default QuestionBox;
