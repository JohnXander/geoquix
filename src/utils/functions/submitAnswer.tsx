import { Dispatch, SetStateAction } from "react"

const submitAnswer = (
    submittedAnswer: string,
    type1: string,
    type2: string,
    correctAnswer: string[],
    setScore: Dispatch<SetStateAction<number>>,
    score: number,
    setQuizData: Dispatch<SetStateAction<any[]>>,
    quizData: any[]
) => {

    if (type2) {
        setQuizData(quizData.filter(q => q?.[type1]?.[type2] !== correctAnswer))
    } else {
        setQuizData(quizData.filter(q => q?.[type1] !== correctAnswer))
    }
    
    if (submittedAnswer === String(correctAnswer)) {
        setScore(score + 1)
    }
}

export default submitAnswer