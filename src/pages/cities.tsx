import { useEffect, useState } from "react"

const Cities = () => {
    const [quizData, setQuizData] = useState<number[]>([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => generateQuizData(data))
    }, [])

    const generateQuizData = (data: any) => {
        const result: Array<number> = []
        
        for (let i = 0; i < 10; i++){
            const randomNumber = Math.floor(Math.random() * 250)

            if (!result.includes(randomNumber)) {
                result.push(data[randomNumber])
            }
        }

        setQuizData(result)
    }

    return (
        <div>
            {quizData.map((c: any, idx: number) => {
                return (
                    <div key={idx}>
                        <h1 className="text-3xl">{c.name.common}</h1>
                        <h1>{c.capital}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Cities