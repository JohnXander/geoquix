import { Dispatch, SetStateAction } from "react"

const generateQuizData = (
    data: any,
    setQuizData: Dispatch<SetStateAction<any[]>>,
    setTotal: Dispatch<SetStateAction<number>>
) => {
    const countries: Array<any> = []
    
    for (let i = 0; i < 10; i++){
        const randomNumber = Math.floor(Math.random() * data.length)

        if (!countries.includes(randomNumber)) {
            if (data[randomNumber].capital !== undefined) {
                countries.push(data[randomNumber])
            }
        }
    }

    setQuizData(countries)
    setTotal(countries.length)
}

export default generateQuizData

