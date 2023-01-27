const formatTimezone = (a: string) => {

    if (a === "UTC") {
        a = "UTC+00:00"
    } else if (a.includes(",")) {
        const arrayOfTimes = a.split(",")
        a = `${arrayOfTimes[0]} - ${arrayOfTimes[arrayOfTimes.length - 1]}`
    }

    return a
    
}

export default formatTimezone