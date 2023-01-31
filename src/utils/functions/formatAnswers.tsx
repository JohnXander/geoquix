import formatNumbers from "./formatNumbers"
import formatTimezone from "./formatTimezone"

const formatAnswers = (type1: string, answer: string) => {
    let displayAnswer = answer

    switch (type1) {
        case "area":
            displayAnswer = `${formatNumbers(answer)} ㎢`
            break
        case "population":
            displayAnswer = formatNumbers(answer)
            break
        case "timezones":
            displayAnswer = formatTimezone(answer)
            break
    }

    return displayAnswer
}

export default formatAnswers