import Head from "next/head"
import { useEffect, useState } from "react"
import generateQuizData from "../utils/functions/generateQuizData"

const Capitals = () => {
    const [quizData, setQuizData] = useState<any[]>([])
    const [randomCapitals, setRandomCapitals] = useState<string[]>([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => {
                generateQuizData(data, setQuizData)
                generateRandomCapitals(data)
            })
    }, [])

    const generateRandomCapitals = (data: any) => {
        const capitals: Array<string> = []

        for (let i = 0; i < data.length; i++){
            if (data[i].capital !== undefined) {
                capitals.push(String(data[i].capital))
            }
        }

        setRandomCapitals(capitals)
    }

    const generateFalseAnswers = (correctAnswer: string) => {
        const randomIdx1 = Math.floor(Math.random() * randomCapitals.length)
        const randomIdx2 = Math.floor(Math.random() * randomCapitals.length)
        const randomIdx3 = Math.floor(Math.random() * randomCapitals.length)

        const allAnswers = [
            String(correctAnswer),
            randomCapitals[randomIdx1],
            randomCapitals[randomIdx2],
            randomCapitals[randomIdx3]
        ].sort()

        return allAnswers
    }

    return (
        <div>
            <Head>
                <title>GeoQuix | Capitals</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <main>
                {quizData.map((c: any, idx: number) => {
                    const answers = generateFalseAnswers(c.capital)

                    return (
                        <div key={idx}>
                            <h1 className="text-3xl">{c.name.common}</h1>
                            <div className="flex gap-2">
                                {answers.map((a: string, idx) => {
                                    return <h2 className="border-2 py-2 px-4" key={idx}>{a}</h2>
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