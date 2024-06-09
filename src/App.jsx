import {useEffect, useState} from "react";
import GetStarted from "./components/GetStarted";
import Quiz from "./components/Quiz";
import yellowBlob from "./assets/yellow-blob.svg";
import blueBlob from "./assets/blue-blob.svg";
import {shuffle} from "./utils/util.js";


function App() {
    const [isStarted, setIsStarted] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [questions, setQuestions] = useState([])
    const [responses, setResponses] = useState({})
    const [responseText, setResponseText] = useState("");

    async function getQuestions() {
        const url = "https://opentdb.com/api.php?amount=5";
        return fetch(url);
    }

    function handleResponseChange(index, response) {
        setResponses((oldResponses) => {
            return { ...oldResponses, [index]: response };
        })
    }

    function handleCheckAnswers() {
        if (isFinished) {
            setResponses({})
            setResponseText("");
            setIsFinished(false);
            setIsStarted(true);
        } else {
            let correct = 0
            for (let i = 0; i < questions.length; i++) {
                if (questions[i]["correct_answer"] === responses[i]) {
                    correct++;
                }
            }
            setResponseText(`You got ${correct} / ${questions.length} Correct!`);
            setIsFinished(false);
            setIsFinished(true);
        }

    }


  useEffect(() => {
      if (isStarted && !isFinished || !isStarted && isFinished) {
          getQuestions()
              .then(res => res.json())
              .then(data =>  {
                  setQuestions(data.results.map(question => {
                      const answers = shuffle([question['correct_answer'], ...question['incorrect_answers']])
                      return {
                          ...question,
                          answers
                      }
                  }))
              });
      }

  }, [isStarted, isFinished]);
    // console.log(questions);

  const component = isStarted && questions.length > 0 ? (
    <Quiz
        questions={questions}
        responses={responses}
        handleResponseChange={handleResponseChange}
        handleCheckAnswers={handleCheckAnswers}
        isFinished={isFinished}
        responseText={responseText}
        />

  ) : (
    <GetStarted getStarted={() => setIsStarted(true)} />
  );
  return (
      <main className="main-container">
        <img src={yellowBlob} className="yellow-blob" alt="Yellow Blob"/>
        <img src={blueBlob} className="blue-blob" alt="Blue Blob"/>
        {component}
      </main>
  );
}

export default App;
