const generateFalseAnswers = (correctAnswer: string, allAnswers: string[]) => {
    const randomIdx1 = Math.floor(Math.random() * allAnswers.length)
    const randomIdx2 = Math.floor(Math.random() * allAnswers.length)
    const randomIdx3 = Math.floor(Math.random() * allAnswers.length)

    const answers = [
        String(correctAnswer),
        allAnswers[randomIdx1],
        allAnswers[randomIdx2],
        allAnswers[randomIdx3]
    ].sort()

    return answers
}

export default generateFalseAnswers