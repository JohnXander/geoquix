import Head from "next/head"
import { useEffect, useState } from "react"
import generateQuizData from "../utils/functions/generateQuizData"
import getAllAnswers from "../utils/functions/getAllAnswers"

const Flags = () => {
    const [quizData, setQuizData] = useState<any[]>([])
    const [randomFlags, setRandomFlags] = useState<string[]>([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => {
                generateQuizData(data, setQuizData)
                getAllAnswers(data, "flags", "png", setRandomFlags)
            })
    }, [])

    return (
        <div>
            <Head>
                <title>GeoQuix | Flags</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <main>
                {quizData.map((c: any, idx: number) => {

                    return (
                        <div key={idx}>
                            <h1 className="text-3xl">{c.name.common}</h1>
                        </div>
                    )
                })}
            </main>
        </div>
    )
}

export default Flags