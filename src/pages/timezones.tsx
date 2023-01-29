import Head from "next/head"
import { useEffect, useState } from "react"
import { Header } from "../components/header/Header"
import QuizHeader from "../components/header/QuizHeader"
import FinishedModal from "../components/modals/FinishedModal"
import Quiz from "../components/quiz/Quiz"
import generateFalseAnswers from "../utils/functions/generateFalseAnswers"
import generateQuizData from "../utils/functions/generateQuizData"
import getAllAnswers from "../utils/functions/getAllAnswers"

const Timezones = () => {
    const [quizData, setQuizData] = useState<any[]>([])
    const [timezones, setTimezones] = useState<string[]>([])
    const [score, setScore] = useState<number>(0)
    const [answered, setAnswered] = useState<number>(0)
    const [completed, setCompleted] = useState<boolean>(false)

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => {
                generateQuizData(data, "timezones", "", setQuizData)
                getAllAnswers(data, "timezones", "", setTimezones)
            })
    }, [])

    const answers = generateFalseAnswers(quizData[0]?.timezones, timezones)
    const quizLen = quizData.length

    return (
        <div>
            <Head>
                <title>GeoQuix | Timezones</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            
            <main className="flex flex-col items-center py-4 gap-4 relative">
                {completed && <FinishedModal score={score} answered={answered} />}

                <QuizHeader
                    category="timezone"
                    score={score}
                    answered={answered}
                    setCompleted={setCompleted}
                />

                {quizLen > 0 &&
                    <Quiz
                        name={quizData[0]?.name.common}
                        type1="timezones"
                        answers={answers}
                        passedType={quizData[0]?.timezones}
                        setScore={setScore}
                        score={score}
                        setQuizData={setQuizData}
                        quizData={quizData}
                        setAnswered={setAnswered}
                        answered={answered}
                        completed={completed}
                    />
                }
               
            </main>
        </div>
    )
}

export default Timezones