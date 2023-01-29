import { Dispatch, SetStateAction, useState } from "react"
import Timer from "../timer/Timer"
import Correct from "../../../assets/quiz-icons/correct.png"
import Question from "../../../assets/quiz-icons/question.png"
import Image from "next/image"

interface Props {
    category: string
    score: number
    answered: number
    setCompleted: Dispatch<SetStateAction<boolean>>
}

const QuizHeader: React.FC<Props> = ({ category, score, answered, setCompleted }) => {
    const [count, setCount] = useState(100)
    
    return (
        <div>
            <h2 className="text-2xl text-center">What is the {category}?</h2>
            <div className="m-4"></div>
            <div className="flex gap-12 items-center">
                <div className="flex justify-center gap-2 w-12">
                    <Image
                        src={Question}
                        alt="Question"
                        width={25}
                        height={25}
                    />
                    <p className="w-6">{answered}</p>
                </div>
                <Timer count={count} setCount={setCount} setCompleted={setCompleted} />
                <div className="flex justify-center gap-2 w-12">
                    <Image
                        src={Correct}
                        alt="Correct"
                        width={25}
                        height={25}
                    />
                    <p className="w-6">{score}</p>
                </div>
            </div>
        </div>
    )
}

export default QuizHeader