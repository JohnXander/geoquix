import { Dispatch, SetStateAction } from "react"

const submitAnswer = (
    submittedAnswer: string,
    correctAnswer: string[],
    setScore: Dispatch<SetStateAction<number>>,
    score: number
) => {
    
    if (submittedAnswer === String(correctAnswer)) {
        setScore(score + 1)
    }
}

export default submitAnswer