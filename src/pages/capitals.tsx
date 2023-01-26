import Head from "next/head"
import { useEffect, useState } from "react"
import { Header } from "../components/header/Header"
import generateFalseAnswers from "../utils/functions/generateFalseAnswers"
import generateQuizData from "../utils/functions/generateQuizData"
import getAllAnswers from "../utils/functions/getAllAnswers"
import submitAnswer from "../utils/functions/submitAnswer"

const Capitals = () => {
    const [quizData, setQuizData] = useState<any[]>([])
    const [capitals, setCapitals] = useState<string[]>([])
    const [score, setScore] = useState<number>(0)

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => {
                generateQuizData(data, setQuizData)
                getAllAnswers(data, "capital", "", setCapitals)
            })
    }, [])

    return (
        <div>
            <Head>
                <title>GeoQuix | Capitals</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            
            <main className="flex flex-col items-center py-4 gap-4">
                <p>{score} / 10</p>
                {quizData.map((c: any, idx: number) => {
                    const answers = generateFalseAnswers(c.capital, capitals)

                    return (
                        <div key={idx} className="flex flex-col items-center justify-center border-y-2 w-full py-6 px-8">
                            <h1 className="text-3xl">{c.name.common}</h1>
                            <div className="m-2"></div>
                            <div className="flex flex-col md:flex-row gap-2">
                                {answers.map((a: string, idx: number) => {
                                    return (
                                        <h2
                                            onClick={() => submitAnswer(a, c.capital, setScore, score)}
                                            className="border-2 py-2 px-4 text-center"
                                            key={idx}>
                                            {a}
                                        </h2>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </main>
        </div>
    )
}

export default Capitals