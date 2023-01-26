import Head from "next/head"
import Image from "next/image"
import { useEffect, useState } from "react"
import generateFalseAnswers from "../utils/functions/generateFalseAnswers"
import generateQuizData from "../utils/functions/generateQuizData"
import getAllAnswers from "../utils/functions/getAllAnswers"

const Flags = () => {
    const [quizData, setQuizData] = useState<any[]>([])
    const [flags, setFlags] = useState<string[]>([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => {
                generateQuizData(data, setQuizData)
                getAllAnswers(data, "flags", "png", setFlags)
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
                    const answers = generateFalseAnswers(c.flags.png, flags)

                    return (
                        <div key={idx}>
                            <h1 className="text-3xl">{c.name.common}</h1>
                            <div className="flex gap-2">
                                {answers.map((a: string, idx) => {
                                    return (
                                        <Image
                                            key={idx}
                                            src={a}
                                            alt={`Flag of ${c.name.common}`}
                                            width={100}
                                            height={100}
                                        />
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

export default Flags