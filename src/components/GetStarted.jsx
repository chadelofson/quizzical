export default function GetStarted(props) {
  return (
    <section className="get-started">
      <h1>Quizzical</h1>
      <p>Lets get started with a quiz</p>
      <button className="btn-start" onClick={props.getStarted}>Start Quiz</button>
    </section>
  );
}
