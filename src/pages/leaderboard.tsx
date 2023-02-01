import Head from "next/head"
import { useState } from "react"
import { trpc } from "../utils/trpc"

const Leaderboard = () => {
    const allScores = trpc.getAllScores.useQuery().data
    const [category, setCategory] = useState<string>("all")
    const [stats, setStats] = useState<string>("none")

    if (allScores === undefined) {
        return (
            <div className="flex justify-center pt-4">
                Loading...
            </div>
        )
    }

    const tableItem = "w-16 md:w-40"
    const tableHeading = `font-bold ${tableItem}`
    const filterItem = "border-2 border-gray-700 p-2 cursor-pointer hover:bg-gray-700"
    
    let displayLeaderboard = allScores

    if (category !== "all") {
        displayLeaderboard = allScores.filter((entry: any) => entry.quiz === category)
    }

    if (stats !== "none") {
        displayLeaderboard = displayLeaderboard.sort((a: any, b:any) => a[stats] - b[stats]).reverse()
    }

    console.log(displayLeaderboard)

    return (
        <div className="flex justify-center">
            <Head>
                <title>GeoQuix | Leaderboard</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center py-4 gap-4 relative">
                <h2>Sort By</h2>
                <ul className="flex">
                    <li onClick={() => setCategory("all")} className={filterItem}>ALL</li>
                    <li onClick={() => setCategory("capitals")} className={filterItem}>CAP</li>
                    <li onClick={() => setCategory("flags")} className={filterItem}>FLA</li>
                    <li onClick={() => setCategory("timezones")} className={filterItem}>TIM</li>
                    <li onClick={() => setCategory("area")} className={filterItem}>ARE</li>
                    <li onClick={() => setCategory("population")} className={filterItem}>POP</li>
                </ul>

                <ul className="flex">
                    <li onClick={() => setStats("none")} className={filterItem}>NONE</li>
                    <li onClick={() => setStats("score")} className={filterItem}>SCORE</li>
                    <li onClick={() => setStats("accuracy")} className={filterItem}>ACC.</li>
                </ul>

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
                            <p className={tableItem}>{accuracy}</p>
                            <p className={tableItem}>{displayQuiz}</p>
                        </div>
                    )
                })
                }
            </main>

        </div>
    )
}

export default Leaderboard
