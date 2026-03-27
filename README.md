# Quizzical

## What it does

The quizzical React application pulls in quiz questions and allows you to
answer the questions and see how many you got right.

## How data flows

### The app does the following to get the Questions for the Quiz:

- If the quiz is started and not finished or if the quiz is not started but finished, then get a new set of questions.
- Save those questions in State after shuffling the questions around.

### During the Quiz - When the user selects their answer

- The createLabelClass first checks to see if the quiz is finished. If it isn't it returns an empty string.
- Otherwise it checks to see if the answer is correct or incorrect to apply the proper class after the quiz is finished.

### When the Quiz is Finished:

- The handleCheckAnswers function in App.jsx checks to see if the quiz is done.
- If it is finished, then it will reset the State for responses, response text, isFinished boolean and isStarted boolean.
- otherwise it will run through all of the questions to determine which ones are correct and incorrect and print to the screen.
- It will also highlight the correct answers in green and incorrect answers in red if the user didn't pick the right answer.

## What you learned

Prior to learning Advanced React Concepts:

- I learned how to manage different components based on State.
- I learned how to show Buttons over the default Radio button UI
- How to apply classes based on correct and incorrect values.
- How to pull in external data and apply it as Components

## What you'd improve

- With React 19, there is a simpler API to handle Form selection
- Use TanStack Query to handle the data fetching
- Use TanStack Forms to control form inputs
- Using Child components over Props to handle some of the logic.

Again this was before we learned how to do Reusable Components and using Complex Advanced React Patterns.
