const todos = JSON.parse(localStorage.getItem("todos"));

const data = {
    /**@type {Object} */
    todos: todos,
    nb_todo: Object.values(todos).filter(todo => !todo.do).length,
    all_completed: !Object.values(todos).some(todo=> !todo.do),
    one_completed: Object.values(todos).some(todo=> todo.do),
    filter: window.location.hash,
    test:
    {
        0: { name: "HELLO", do: false },
        1: { name: "AS", do: false },
        2: { name: "TODOS", do: false },
    },
}

data.todos = data.todos ? data.todos : {}

// console.log(data.todos);
// localStorage.setItem("todos", JSON.stringify(data.test))

function SaveTodo() {
    localStorage.setItem("todos", JSON.stringify(data.todos))
}