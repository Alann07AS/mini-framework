const data = {
    /**@type {Array} */
    todos: JSON.parse(localStorage.getItem("todos")),
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