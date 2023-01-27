const formatNumbers = (num: string) => {

    switch (num.length) {
        case 4:
            num = `${num[0]},${num.substring(1)}`
            break
        case 5:
            num = `${num.substring(0, 2)},${num.substring(2)}`
            break
        case 6:
            num = `${num.substring(0, 3)},${num.substring(3)}`
            break 
        case 7: 
            num = `${num[0]},${num.substring(1, 4)},${num.substring(4)}`
            break
        case 8: 
            num = `${num.substring(0, 2)},${num.substring(2, 5)},${num.substring(5)}`
            break
        case 9: 
            num = `${num.substring(0, 3)},${num.substring(3, 6)},${num.substring(6)}`
    }

    return num
}

export default formatNumbers