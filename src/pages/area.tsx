import Head from "next/head"
import { useEffect, useState } from "react"
import { Header } from "../components/header/Header"
import formatNumbers from "../utils/functions/formatNumbers"
import generateFalseAnswers from "../utils/functions/generateFalseAnswers"
import generateQuizData from "../utils/functions/generateQuizData"
import getAllAnswers from "../utils/functions/getAllAnswers"
import submitAnswer from "../utils/functions/submitAnswer"

const Currencies = () => {
    const [quizData, setQuizData] = useState<any[]>([])
    const [areas, setAreas] = useState<string[]>([])
    const [score, setScore] = useState<number>(0)

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => {
                generateQuizData(data, "area", "", setQuizData)
                getAllAnswers(data, "area", "", setAreas)
            })
    }, [])

    const answers = generateFalseAnswers(quizData[0]?.area, areas)
    const quizLen = quizData.length

    return (
        <div>
            <Head>
                <title>GeoQuix | Area</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            
            <main className="flex flex-col items-center py-4 gap-4">
                <div className="flex flex-col gap-4 md:flex-row items-center">
                    <h2 className="text-2xl">What is the land area?</h2>
                    <p className="border-2 py-4 px-8">{score} / 10</p>
                    <p>{quizLen} questions left</p>
                </div>

                {quizLen > 0 &&
                    <div className="flex flex-col items-center justify-center border-y-2 w-full py-6 px-8">
                        <h1 className="text-3xl">{quizData[0]?.name.common}</h1>
                        <div className="m-2"></div>
                        <div className="flex flex-col md:flex-row gap-2">
                            {answers.map((a: string, answerIdx: number) => {
                                a = formatNumbers(a)

                                return (
                                    <h2
                                        key={answerIdx}
                                        onClick={() => {
                                            submitAnswer(
                                                a,
                                                "area",
                                                "",
                                                quizData[0]?.area,
                                                setScore,
                                                score,
                                                setQuizData,
                                                quizData
                                            )
                                        }}
                                        className="border-2 py-2 px-4 text-center cursor-pointer hover:bg-gray-200">
                                        {a} &#x33A2;
                                    </h2>
                                )
                            })}
                        </div>
                    </div>}
               
            </main>
        </div>
    )
}

export default Currencies