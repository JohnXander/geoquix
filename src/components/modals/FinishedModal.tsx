import Image from "next/image"
import { useState } from "react"
import SaveScoreForm from "../forms/SaveScoreForm"
import Correct from "../../../assets/quiz-icons/correct.png"
import { useRouter } from "next/router"

interface Props {
    score: number
    answered: number
    type: string
}

const FinishedModal: React.FC<Props> = ({ score, answered, type }) => {
    const [formOpen, setFormOpen] = useState<boolean>(false)
    const [scoreSubmitted, setScoreSubmitted] = useState<boolean>(false)
    const router = useRouter()

    const percentage = Math.floor((100 * score) / answered)

    return (
        <div className="bg-gray-800 w-full md:w-fit flex flex-col items-center gap-2 border-2 border-gray-700 rounded p-12 absolute">
            <h1 className="text-4xl">Time Up!</h1>
            <p className="text-2xl">Questions: {answered}</p>
            <p className="text-2xl">Score: {score}</p>
            <p className="text-2xl">Accuracy: {percentage}%</p>

            {scoreSubmitted && 
                <div className="flex flex-col gap-4 items-center mt-2">
                    <div className="flex items-center gap-2">
                        <p className="text-green-400">Score Submitted</p>
                        <Image
                            src={Correct}
                            alt={"Correct Icon"}
                            width={20}
                            height={20}
                        />
                    </div>
                    <button
                        className="border-2 border-gray-700 rounded py-2 px-4 hover:bg-gray-700"
                        onClick={() => router.push("/leaderboard")}>
                        Leaderboard
                    </button>
                </div>
            }

            {!formOpen && !scoreSubmitted &&
                <button
                    className="border-2 border-green-700 rounded py-2 px-4 hover:bg-green-700 mt-2"
                    onClick={() => setFormOpen(true)}>
                    Save Score
                </button>
            }

            {formOpen &&
                <SaveScoreForm
                    setFormOpen={setFormOpen}
                    score={score}
                    accuracy={percentage}
                    type={type}
                    setScoreSubmitted={setScoreSubmitted}
                />
            }
        </div>
    )
}

export default FinishedModal