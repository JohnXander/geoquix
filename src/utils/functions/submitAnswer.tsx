import { Dispatch, SetStateAction } from "react"

const submitAnswer = (
    submittedAnswer: string,
    correctAnswer: string[],
    setScore: Dispatch<SetStateAction<number>>,
    score: number,
    setQuizData: Dispatch<SetStateAction<any[]>>,
    quizData: any[]
) => {

    setQuizData(quizData.filter(q => q.capital !== correctAnswer))
    
    if (submittedAnswer === String(correctAnswer)) {
        setScore(score + 1)
    }
}

export default submitAnswer