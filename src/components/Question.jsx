import { decode } from 'html-entities';

export default function Question(props) {
    const createLabelClass = (answer) => {
        if (!props.isFinished) {
            return ""
        }
        if (answer === props.question.correctAnswer) {
            return "correct"
        }
        if (answer === props.question.response) {
            return "incorrect"
        }
        return ""
    }

    return (
        <section className="question-container">
            <h2 className="question-text">{decode(props.question.text)}</h2>
            <div className="response-container">
                {props.question.answers.map((answer, i) => (
                    <div className="answer-btn" key={i}>
                        <input
                            type="radio"
                            id={`question-${props.question.id}-answer-${i}`}
                            name={`question-${props.question.id}`}
                            value={decode(answer)}
                            checked={decode(answer) === decode(props.question.response)}
                            onChange={() => { props.handleResponseChange(props.question.id, decode(answer)) }}

                        />
                        <label
                            htmlFor={`question-${props.question.id}-answer-${i}`}
                            className={createLabelClass(decode(answer))}
                        >
                            {decode(answer)}
                        </label>
                    </div>
                ))}
            </div>
        </section>
    )
}