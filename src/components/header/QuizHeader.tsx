interface Props {
    category: string
    score: number
    quizLen: number
}

const QuizHeader: React.FC<Props> = ({ category, score, quizLen }) => {
    
    return (
        <div className="flex flex-col gap-4 md:flex-row items-center">
            <h2 className="text-2xl">What is the {category}?</h2>
            <p className="border-2 py-4 px-8">{score} / 10</p>
            <p>{quizLen} questions left</p>
        </div>
    )
}

export default QuizHeader