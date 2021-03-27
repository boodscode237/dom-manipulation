const prices = [10, 20, 60, 40, 70, 90, 30]

// we use it when we want to apply the same action to an array items
const salesPrices = prices.map((price) => {
    return price / 2
})

// console.log(salesPrices)

const products = [
    { name: 'gold star', price: 20 },
    { name: 'mushroom', price: 40 },
    { name: 'green shells', price: 30 },
    { name: 'banana skin', price: 10 },
    { name: 'red shells', price: 50 }
];

const bigSales = products.map((product) => {
    if (product.price > 30) {
        return { name: product.name, price: product.price / 2 }
    } else {
        return products
    }
})

console.log(bigSales)

// find method

const firstHighScore = prices.find((price) => {
    return price > 50;
})

console.log(firstHighScore)