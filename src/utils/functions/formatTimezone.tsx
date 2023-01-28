const formatTimezone = (time: string) => {

    if (time === "UTC") {
        time = "UTC+00:00"
    } else if (time.includes(",")) {
        const arrayOfTimes = time.split(",")
        time = `${arrayOfTimes[0]} - ${arrayOfTimes[arrayOfTimes.length - 1]}`
    }

    return time
    
}

export default formatTimezone