import Head from "next/head"
import { useEffect, useState } from "react"
import { Header } from "../components/header/Header"
import QuizHeader from "../components/header/QuizHeader"
import Quiz from "../components/quiz/Quiz"
import generateFalseAnswers from "../utils/functions/generateFalseAnswers"
import generateQuizData from "../utils/functions/generateQuizData"
import getAllAnswers from "../utils/functions/getAllAnswers"

const Capitals = () => {
    const [quizData, setQuizData] = useState<any[]>([])
    const [capitals, setCapitals] = useState<string[]>([])
    const [score, setScore] = useState<number>(0)
    const [answered, setAnswered] = useState<number>(0)

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => {
                generateQuizData(data, "capital", "", setQuizData)
                getAllAnswers(data, "capital", "", setCapitals)
            })
    }, [])

    const answers = generateFalseAnswers(quizData[0]?.capital, capitals)
    const quizLen = quizData.length

    return (
        <div>
            <Head>
                <title>GeoQuix | Capitals</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            
            <main className="flex flex-col items-center py-4 gap-4">
                <QuizHeader
                    category="capital city"
                    score={score}
                    answered={answered}
                />

                {quizLen > 0 &&
                    <Quiz
                        name={quizData[0]?.name.common}
                        type1="capital"
                        answers={answers}
                        passedType={quizData[0]?.capital}
                        setScore={setScore}
                        score={score}
                        setQuizData={setQuizData}
                        quizData={quizData}
                        setAnswered={setAnswered}
                        answered={answered}
                    />
                }
               
            </main>
        </div>
    )
}

export default Capitals