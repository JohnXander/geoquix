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

        const item = data[randomNumber]

        if (type2 !== "") { 
            if (item?.[type1]?.[type2]) {
                countries.push(item)
            } else {
                countries.push(data[0])
            }
        } else {
            if (item?.[type1]) {
                countries.push(item)
            } else {
                countries.push(data[0])
            }
        }

    }

    setQuizData(countries)
}

export default generateQuizData

