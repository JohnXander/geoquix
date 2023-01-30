import { Dispatch, SetStateAction } from "react"

interface Props {
    setQuizStart: Dispatch<SetStateAction<boolean>>
}

const QuizStarter: React.FC<Props> = ({ setQuizStart }) => {
    return (
        <div className="flex flex-col gap-4 items-center border-2 border-gray-700 rounded p-8">
            <p>You will have 100 seconds to answer as many questions as possible.</p>
            <button
                className="border-2 border-gray-700 rounded p-4 hover:bg-gray-700"
                onClick={() => setQuizStart(true)}>
                Start Quiz
            </button>
        </div>
    )
    }

export default QuizStarter
