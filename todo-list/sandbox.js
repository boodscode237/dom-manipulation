const addForm = document.querySelector('.add')
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')

const generateTemplates = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="fas fa-trash delete"></i>
    </li>
    `
    list.innerHTML += html
}

const filterTodos = term => {
        //this normally outputs  a HTMLCollection and because we can't use arrays methods on them and we should convert it to an array
        Array.from(list.children)
            .filter((todo) => {
                return !todo.textContent.toLowerCase().includes(term)
            })
            .forEach(todo => {
                todo.classList.add('filtered');
            })


        //removing the filtered class when we have a match
        Array.from(list.children)
            .filter((todo) => {
                return todo.textContent.toLoweCase().includes(term)
            })
            .forEach(todo => {
                todo.classList.remove('filtered');
            })
            // filterTodos.reset();
    }
    //adding todos
addForm.addEventListener('submit', e => {
    e.preventDefault();
    // select the name of the form field and remove the spaces
    const todo = addForm.add.value.trim()
    if (todo.length) {
        generateTemplates(todo)
            //supress the adding box when we added in list
        addForm.reset()
    }

})

//delete todos with event delegator
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
    }
})

//keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term)
})