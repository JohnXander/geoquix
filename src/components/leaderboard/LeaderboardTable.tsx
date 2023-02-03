interface Props {
    displayLeaderboard: any
}

const LeaderboardTable: React.FC<Props> = ({ displayLeaderboard }) => {
    const tableItem = "w-16 md:w-40"
    const tableHeading = `font-bold ${tableItem}`

    return (
        <>
            <div className="border-b-2 border-gray-700 flex gap-4 pb-2">
                <p className={tableHeading}>Name</p>
                <p className={tableHeading}>Score</p>
                <p className={tableHeading}>Acc.</p>
                <p className={tableHeading}>Quiz</p>
            </div>

            {displayLeaderboard.map((entry: any) => {
                const { id, name, score, accuracy, quiz } = entry

                let displayQuiz = quiz.substring(0, 3).toUpperCase()
                
                if (quiz === "area" || quiz === "flags" || quiz === "timezones") {
                    displayQuiz = quiz.substring(0, 4).toUpperCase()
                }
                    
                return (
                    <div
                        className="flex gap-4"
                        key={id}>
                        <p className={tableItem}>{name.toUpperCase()}</p>
                        <p className={tableItem}>{score}</p>
                        <p className={tableItem}>{`${accuracy}%`}</p>
                        <p className={tableItem}>{displayQuiz}</p>
                    </div>
                )
            })}
        </>
    )
}

export default LeaderboardTable

