const firstWorkDayMs = new Date(2021, 10, 14).getTime()
const twoDayMs = 86400000 * 2
//const inputDate = '11/27/2021'
const inputDate = prompt('Enter the date You are interested in: ', '11/26/2021')
const inputDateFull = new Date(inputDate)

const checkEnteredDay = (enteredDate) => {
    const inputDateMs = new Date(enteredDate).getTime()
    const differenceMs = inputDateMs - firstWorkDayMs
    const divisionResult = differenceMs / twoDayMs
    const reminder = divisionResult % twoDayMs
    const checkSecondDay = Math.round(reminder) % 2
    const isFirstWorkDay = !(reminder % 2)
    const isFirstFreeDay = !isFirstWorkDay && Number.isInteger(reminder)
    const isSecondFreeDay = !isFirstWorkDay && !checkSecondDay
    const isSecondWorkDay = !isFirstWorkDay && checkSecondDay


    /*
        console.log( divisionResult, 'div result')
        console.log(divisionResult%2, '__')
        console.log(reminder, 'reminder')
    */



    let resultObj = {
        day: '',
        busyness: ''
    }

    if (isSecondWorkDay) {
        //console.log(reminder)

        resultObj.day = 'second'
        resultObj.busyness = 'work 2'
    }

    if (isSecondFreeDay) {
        //console.log(reminder)

        resultObj.day = 'second'
        resultObj.busyness = 'free 2'
    }

    if (isFirstFreeDay) {
       //console.log(reminder)
        resultObj.day = 'first'
        resultObj.busyness = 'FREE'
    }
    if (isFirstWorkDay) {
        //console.log(reminder)

        resultObj.day = 'first'
        resultObj.busyness = 'WORK'
    }
    return resultObj
}
const result = checkEnteredDay(inputDate);

alert(`This is the ${result.day} day of ${result.busyness}`)


const checkEveryDayInMonth = () => {
    const dt = new Date()
    const month = dt.getMonth()
    const year = dt.getFullYear()

    const daysInMonth = new Date(year, month, 0).getDate()

    for (let i = 1; i < daysInMonth; i += 1) {
        const day = new Date(year, month, i)
        const result = checkEnteredDay(day)
        const showLessInfoDay = day.toString().slice(0, 10)
        const message = `${showLessInfoDay} == ${result.busyness}`
        console.log(message)
    }
}
checkEveryDayInMonth()

