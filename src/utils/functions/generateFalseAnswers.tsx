const generateFalseAnswers = (correctAnswer: string, allAnswers: string[]) => {
    const generateRandomNum = () => Math.floor(Math.random() * allAnswers.length)

    const answers = [
        String(correctAnswer),
        allAnswers[generateRandomNum()],
        allAnswers[generateRandomNum()],
        allAnswers[generateRandomNum()]
    ].sort()

    return answers
}

export default generateFalseAnswers