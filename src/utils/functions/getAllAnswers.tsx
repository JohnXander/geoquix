import { Dispatch, SetStateAction } from "react"

const getAllAnswers = (data: any, type1: string, type2: string, setAllAnswers: Dispatch<SetStateAction<string[]>>) => {
    const answers: Array<string> = []

    for (let i = 0; i < data.length; i++){
        if (type2 !== "") {
            if (data[i]?.[type1]?.[type2] !== undefined) {
                answers.push(String(data[i]?.[type1]?.[type2]))
            }
        } else {
            if (data[i]?.[type1] !== undefined) {
                answers.push(String(data[i]?.[type1]))
            }
        }
        
    }

    setAllAnswers(answers)
}

export default getAllAnswers