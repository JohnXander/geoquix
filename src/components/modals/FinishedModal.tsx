interface Props {
    score: number
    answered: number
}

const FinishedModal: React.FC<Props> = ({ score, answered }) => {

    return (
        <div className="bg-gray-100 flex flex-col items-center border-2 py-32 px-8 absolute">
            <h1 className="text-3xl">Finished Game!</h1>
            <p className="text-2xl">Questions: {answered}</p>
            <p className="text-2xl">Score: {score}</p>
        </div>
    )
}

export default FinishedModal