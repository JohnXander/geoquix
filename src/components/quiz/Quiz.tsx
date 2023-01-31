import { Dispatch, SetStateAction } from "react"
import formatAnswers from "../../utils/functions/formatAnswers"
import submitAnswer from "../../utils/functions/submitAnswer"

interface Props {
    name: string
    type1: string
    answers: string[]
    passedType: string[]
    setScore: Dispatch<SetStateAction<number>>
    score: number
    setQuizData: Dispatch<SetStateAction<any[]>>
    quizData: any[]
    setAnswered: Dispatch<SetStateAction<number>>
    answered: number
    completed: boolean
}

const Quiz: React.FC<Props> = ({
    name,
    type1,
    answers,
    passedType,
    setScore,
    score,
    setQuizData,
    quizData,
    setAnswered,
    answered,
    completed
}) => {

    return (
        <div
            style={completed ? {pointerEvents: "none"} : {pointerEvents: "auto"}}
            className="flex flex-col items-center justify-center w-80 md:w-fit py-6 px-8 border-2 border-gray-700 rounded">
                <h1 className="text-3xl">{name}</h1>
                <div className="m-2"></div>
                <div className="flex flex-col md:flex-row gap-2">
                    {answers.map((a: string, answerIdx: number) => {
                        const displayAnswer = formatAnswers(type1, a)

                        return (
                            <h2
                                key={answerIdx}
                                className="border-2 border-gray-700 rounded py-2 px-4 text-center cursor-pointer hover:bg-gray-700"
                                onClick={() => {
                                    submitAnswer(
                                        a,
                                        type1,
                                        "",
                                        passedType,
                                        setScore,
                                        score,
                                        setQuizData,
                                        quizData,
                                        setAnswered,
                                        answered
                                    )
                                }}>
                                {displayAnswer}
                            </h2>
                        )
                    })}
                </div>
        </div>
    )
}

export default Quiz
