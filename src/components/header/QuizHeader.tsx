import { Timer } from "../timer/Timer"

interface Props {
    category: string
    score: number
    answered: number
}

const QuizHeader: React.FC<Props> = ({ category, score, answered }) => {
    
    return (
        <div>
            <h2 className="text-2xl">What is the {category}?</h2>
            <div className="m-4"></div>
            <div className="flex gap-4 items-center">
                <p className="border-2 py-4 px-8">{answered}</p>
                <p className="border-2 py-4 px-8">{score}</p>
                <Timer />
            </div>
        </div>
    )
}

export default QuizHeader