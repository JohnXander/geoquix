import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import { trpc } from "../utils/trpc"
import capitals from "../../assets/category-icons/capitals.png"
import flags from "../../assets/category-icons/flags.png"
import timezones from "../../assets/category-icons/timezones.png"
import area from "../../assets/category-icons/area.png"
import population from "../../assets/category-icons/population.png"
import none from "../../assets/quiz-icons/none.png"
import score from "../../assets/quiz-icons/score.png"
import accuracy from "../../assets/quiz-icons/accuracy.png"
import FilterBar from "../components/leaderboard/FilterBar"

const Leaderboard = () => {
    const allScores = trpc.getAllScores.useQuery().data
    const [category, setCategory] = useState<string>("none")
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

    const categoryFilters = [none, capitals, flags, timezones, area, population]
    const statFilters = [none, score, accuracy]
    
    let displayLeaderboard = allScores

    if (category !== "none") {
        displayLeaderboard = allScores.filter((entry: any) => entry.quiz === category)
    }

    if (stats !== "none") {
        displayLeaderboard = displayLeaderboard.sort((a: any, b:any) => a[stats] - b[stats]).reverse()
    }

    return (
        <div className="flex justify-center">
            <Head>
                <title>GeoQuix | Leaderboard</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center py-4 gap-4 relative">
                <div className="flex flex-col md:flex-row gap-x-8 items-center">
                    <h2 className="font-bold">Sort By:</h2>

                    <ul className="flex">
                        <FilterBar
                            filters={categoryFilters}
                            filter={category}
                            setFilter={setCategory}
                        />
                    </ul>

                    <ul className="flex">
                        <FilterBar
                            filters={statFilters}
                            filter={stats}
                            setFilter={setStats}
                        />
                    </ul>
                </div>

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
                })
                }
            </main>

        </div>
    )
}

export default Leaderboard
