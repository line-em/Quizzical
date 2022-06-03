import { React, useState } from "react";

function QuestionBox(props) {
	const handleStyles = (choice) => {
		let selectedBgColor = null;
		if (props.disabled && props.current_answer === choice) {
			props.is_correct
				? (selectedBgColor = "var(--green)")
				: (selectedBgColor = "var(--red)");
		} else if (props.current_answer === choice) {
			selectedBgColor = "var(--teal)";
		}

		return {
			backgroundColor: selectedBgColor
		};
	};

	const choices = props.all_answers.map((choice) => {
		return (
			<button
				className={`choice-button`}
				style={handleStyles(choice)}
				role="button"
				key={choice}
				id={choice}
				onClick={() => props.chooseAnswer(choice, props.id)}
				disabled={props.disabled}
			>
				{props.disabled && props.correct_answer === choice ? "✔ " : ""}
				{choice}
			</button>
		);
	});
	return (
		<section className="question-container">
			<p className="question" id={props.id}>
				{props.question}
			</p>
			<article className="button-container">{choices}</article>
		</section>
	);
}

export default QuestionBox;
