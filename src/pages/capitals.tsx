import { useEffect, useState } from "react"

const Capitals = () => {
    const [quizData, setQuizData] = useState<number[]>([])
    const [randomCapitals, setRandomCapitals] = useState<string[]>([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => {
                generateQuizData(data)
                generateRandomCapitals(data)
            })
    }, [])

    const generateQuizData = (data: any) => {
        const countries: Array<number> = []
        
        for (let i = 0; i < 10; i++){
            const randomNumber = Math.floor(Math.random() * 250)

            if (!countries.includes(randomNumber)) {
                if (data[randomNumber].capital !== undefined) {
                    countries.push(data[randomNumber])
                }
            }
        }

        setQuizData(countries)
    }

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
            {quizData.map((c: any, idx: number) => {
                const answers = generateFalseAnswers(c.capital)

                return (
                    <div key={idx}>
                        <h1 className="text-3xl">{c.name.common}</h1>
                        {answers.map((a: string, idx) => {
                            return <h2 key={idx}>{a}</h2>
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Capitals