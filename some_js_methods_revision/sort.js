const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi']

names.sort()
names.reverse() //this method changes the original array

console.log(names)

const scores4 = [10, 50, 20, 5, 35, 70, 45];

// scores4.reverse()
// scores4.sort()
// console.log(scores4)
// this sorts from bigger to lower
scores4.sort((a, b) => b - a)
console.log(scores4)


const players = [
    { name: 'mario', score: 20 },
    { name: 'luigi', score: 10 },
    { name: 'chun-li', score: 50 },
    { name: 'yoshi', score: 30 },
    { name: 'shaun', score: 70 }
];

players.sort((a, b) => {
    if (a.score > b.score) {
        return -1 // a will come before b
    } else if (b.score > a.score) {
        return +1
    } else {
        return 0
    }
})

console.log(players)

players.sort((a, b) => {
    return b.score - a.score;
})