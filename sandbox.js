const param = document.querySelector('div.error');
const param1 = document.querySelector('#page-title');
const para = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error')

// we can use foreach on querySelector
para.forEach(para => {
    console.log(para)
})
console.log(param1)

const para1 = document.getElementById('page-title');
const para2 = document.getElementsByTagName