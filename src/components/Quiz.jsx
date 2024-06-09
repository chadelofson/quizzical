import Question from "./Question.jsx";


export default function Quiz(props) {
    const questionComponents = props.questions.map((question, i) => {
        return <Question
                key={i}
                question={{ id: i, text: question.question, answers: question.answers, response: props.responses[i], correctAnswer: question['correct_answer']  }}
                isFinished={props.isFinished}
                handleResponseChange={props.handleResponseChange}
        />
    })


  return (
      <section className="quiz-container">
          {questionComponents}
          <div className="quiz-results">
              {props.isFinished && <p className="result-text">{props.responseText}</p>}
              <button className=" btn-check" onClick={props.handleCheckAnswers}>{props.isFinished ?  "Play again" : "Check Answers"}</button>
          </div>
      </section>
  );
}
