import { Dispatch, SetStateAction } from "react"
import submitAnswer from "../../utils/functions/submitAnswer"

interface Props {
    name: string
    answers: string[]
    capital: string[]
    setScore: Dispatch<SetStateAction<number>>
    score: number
    setQuizData: Dispatch<SetStateAction<any[]>>
    quizData: any[]
}

const Quiz: React.FC<Props> = ({ name, answers, capital, setScore, score, setQuizData, quizData }) => {
    return (
        <div className="flex flex-col items-center justify-center border-y-2 w-full py-6 px-8">
                <h1 className="text-3xl">{name}</h1>
                <div className="m-2"></div>
                <div className="flex flex-col md:flex-row gap-2">
                    {answers.map((a: string, answerIdx: number) => {
                        return (
                            <h2
                                key={answerIdx}
                                onClick={() => {
                                    submitAnswer(
                                        a,
                                        "capital",
                                        "",
                                        capital,
                                        setScore,
                                        score,
                                        setQuizData,
                                        quizData
                                    )
                                }}
                                className="border-2 py-2 px-4 text-center cursor-pointer hover:bg-gray-200">
                                {a}
                            </h2>
                        )
                    })}
                </div>
        </div>
    )
}

export default Quiz
