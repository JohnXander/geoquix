import { Dispatch, SetStateAction } from "react"

const generateQuizData = (
    data: any,
    type: string,
    setQuizData: Dispatch<SetStateAction<any[]>>
) => {
    const countries: Array<any> = []
    
    for (let i = 0; i < 10; i++){
        const randomNumber = Math.floor(Math.random() * data.length)

        if (data[randomNumber]?.[type] !== undefined) {
            countries.push(data[randomNumber])
        } else {
            countries.push(data[100])
        }
    }

    setQuizData(countries)
}

export default generateQuizData

