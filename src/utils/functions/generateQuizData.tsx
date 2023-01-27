import { Dispatch, SetStateAction } from "react"

const generateQuizData = (
    data: any,
    type1: string,
    type2: string,
    setQuizData: Dispatch<SetStateAction<any[]>>
) => {
    const countries: Array<any> = []
    
    for (let i = 0; i < 10; i++){
        const randomNumber = Math.floor(Math.random() * data.length)

        if (type2 !== "") { 
            if (data[randomNumber]?.[type1]?.[type2] !== undefined) {
                countries.push(data[randomNumber])
            } else {
                countries.push(data[100])
            }
        } else {
            if (data[randomNumber]?.[type1] !== undefined) {
                countries.push(data[randomNumber])
            } else {
                countries.push(data[100])
            }
        }

    }

    setQuizData(countries)
}

export default generateQuizData

