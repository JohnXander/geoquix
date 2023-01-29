import Image from "next/image"
import { Dispatch, SetStateAction } from "react"
import Clock from "../../../assets/quiz-icons/clock.png"

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
        <div className="flex justify-center gap-2 w-12">
            <Image
                src={Clock}
                alt="Clock"
                width={25}
                height={25}
            />
            <p className="w-6">{count}</p>
        </div>
    )
}

export default QuizHeader
