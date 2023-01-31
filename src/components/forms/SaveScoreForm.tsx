import Image from "next/image"
import { Dispatch, SetStateAction } from "react"
import Close from "../../../assets/quiz-icons/close.png"

interface Props {
    setFormOpen: Dispatch<SetStateAction<boolean>>
}

const SaveScoreForm: React.FC<Props> = ({ setFormOpen }) => {
    return (
        <div className="flex flex-col gap-2 border-2 border-gray-700 rounded py-4 px-8">
            <div className="flex justify-end">
                <Image
                    className="cursor-pointer"
                    src={Close}
                    alt={"Close"}
                    onClick={() => setFormOpen(false)}
                    width={10}
                    height={10}
                />
            </div>
            <h1>Enter your name</h1>
            <input
                className="bg-inherit border-2 border-gray-700 rounded py-2 px-4"
                type="text"
            />
            <button
                className="border-2 border-gray-700 rounded py-2 px-4 hover:bg-gray-700">
                Submit Score
            </button>
        </div>
    )
}

export default SaveScoreForm