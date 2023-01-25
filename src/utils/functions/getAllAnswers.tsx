const getAllAnswers = (data: any, type1: any, type2: any, setAllAnswers: any) => {
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