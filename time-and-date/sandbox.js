const before = new Date('February 1 2020 7:30:59')
const now = new Date()

// 1 jan 1970 beginning of timestamp
// grab years months and time and day

console.log("getFullYear: ", now.getFullYear())
    // JS get month is an integer  from 0 to 11. January will be 0 and December = 11
console.log("getMonth: ", now.getMonth())
console.log("getDate: ", now.getDate())
    // JS get Day is an integer  from 0 to 6. Sunay will be 0 and Saturday = 11
console.log("getDay: ", now.getDay())
console.log("getHours: ", now.getHours())
console.log("getMinutes: ", now.getMinutes())
console.log("getSeconds: ", now.getSeconds())

//Timestamps

console.log("timestamp: ", now.getTime())

//Date strings
console.log(now.toDateString())
console.log(now.toTimeString())
console.log(now.toLocaleString())

// to comprare two dates, it is better to compare the timestamp (it is given in milliseconds)
console.log(now.getTime(), before.getTime())
const diff = now.getTime() - before.getTime()
console.log(diff)
const mins = Math.round(diff / 1000 / 60)
const hours = Math.round(mins / 60)
const days = Math.round(hours / 24)

console.log(mins, hours, days)
console.log(`It was created ${days} ago`)
    // converting timestamps into date objects

const timeStamp = 1616944757999;
console.log(new Date(timeStamp))