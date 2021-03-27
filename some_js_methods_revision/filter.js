const score2 = [10, 20, 60, 40, 70, 90, 30]

const bigDigit = score2.filter((score) => {
    return score > 20;
})

console.log(bigDigit)

const users = [
    { name: 'mario', premium: true },
    { name: 'yoshi', premium: false },
    { name: 'donald', premium: true },
    { name: 'rom', premium: false }
]

const premiumUsers = users.filter((user) => {
    return user.premium;
})

console.log(premiumUsers)