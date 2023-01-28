interface Props {
    score: number
    answered: number
}

const FinishedModal: React.FC<Props> = ({ score, answered }) => {

    return (
        <div>
            <h1>Finished Game!</h1>
            <p>You answered {answered} questions</p>
            <p>Your score was: {score}</p>
        </div>
    )
}

export default FinishedModal