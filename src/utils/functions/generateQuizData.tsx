import { Dispatch, SetStateAction } from "react"

const generateQuizData = (
    data: any,
    setQuizData: Dispatch<SetStateAction<any[]>>,
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
}

export default generateQuizData

