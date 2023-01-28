import { Dispatch, SetStateAction } from "react"

interface Props {
    count: number,
    setCount: Dispatch<SetStateAction<number>>
    setCompleted: Dispatch<SetStateAction<boolean>>
}

const QuizHeader: React.FC<Props> = ({ count, setCount, setCompleted }) => {

    setTimeout(() => {
        count > 0 && setCount(count -1)
    }, 1000)

    if (count === 0) {
        setCompleted(true)
    }

    return (
        <p className="border-2 py-4 px-8">{count}</p>
    )
}

export default QuizHeader
