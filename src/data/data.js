import {shuffle} from "../utils/util.js";

const questions = [
    {
        type:"multiple",
        difficulty:"medium",
        category:"Entertainment: Film",
        question:"Which movie sequel had improved box office results compared to its original film?",
        correct_answer:"Toy Story 2",
        incorrect_answers:["Sin City: A Dame to Kill For","Speed 2: Cruise Control","Son of the Mask"]
    },
    {
        type:"multiple",
        difficulty:"medium",
        category:"Entertainment: Video Games",
        question:"Who is the main villain of Kirby&#039;s Return to Dreamland?",
        correct_answer:"Magolor",
        incorrect_answers:["Landia","King Dedede","Queen Sectonia "]},
    {
        type:"boolean",
        difficulty:"easy",
        category:"General Knowledge",
        question:"Jingle Bells was originally meant for Thanksgiving",
        correct_answer:"True",
        incorrect_answers:["False"]
    },
    {
        type:"multiple",
        difficulty:"medium",
        category:"Science &amp; Nature",
        question:"Which part of the body does glaucoma affect?",
        correct_answer:"Eyes",
        incorrect_answers:["Throat","Stomach","Blood"]
    },
    {
        type:"multiple",
        difficulty:"medium",
        category:"Entertainment: Film",
        question:"What is the birth name of Michael Caine?",
        correct_answer:"Maurice Micklewhite",
        incorrect_answers:["Morris Coleman","Carl Myers","Martin Michaels"]
    }
]

export const  data = questions.map(question => {
    const answers = shuffle([question['correct_answer'], ...question['incorrect_answers']])
    return {
        ...question,
        answers
    }
})