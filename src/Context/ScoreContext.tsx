import { useState, createContext } from "react";

export const ScoreContext = createContext({
    question: "",
    answer: "",
    choice: [""],
    scoreGet: 0,
    scoreAll: 0,
    setQuestionAnswer: (question: string, answer: string) => { },
    setChoice: (choice: string[]) => { },
    checkAnswer: (ans: string): boolean => false,
    reset: () => { }
})

const ScoreContxtProvider = (props: any) => {
    const [answer, setAnswer] = useState("");
    const [question, setQuestion] = useState("");
    const [choice, setChoice] = useState<string[]>([]);
    const [score, setScore] = useState(0);
    const [allScore, setAllScore] = useState(0);

    const checkAnswer = (ans: string) => {
        setAllScore(allScore + 1);
        if (ans === answer) {
            setScore(score + 1)
            return true;
        }
        return false;
    }

    const setQuestionAnswer = (question: string, answer: string) => {
        setQuestion(question);
        setAnswer(answer)
    }

    const setNewChoice = (choice: string[]) => {
        setChoice(choice);
    }

    const resetScore = () => {
        setAnswer("")
        setQuestion("")
        setChoice([])
        setScore(0)
        setAllScore(0)
    }
    const context = {
        question: question,
        answer: answer,
        choice: choice,
        scoreGet: score,
        scoreAll: allScore,
        checkAnswer: checkAnswer,
        setChoice: setNewChoice,
        setQuestionAnswer: setQuestionAnswer,
        reset: resetScore,
    }

    return (
        <ScoreContext.Provider value={context}>
            {props.children}
        </ScoreContext.Provider>
    )


}

export default ScoreContxtProvider;