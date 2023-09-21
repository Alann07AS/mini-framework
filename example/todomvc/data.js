const todos = JSON.parse(localStorage.getItem("todos"))||{};

const updateShow = ()=> Object.keys(todos).length !== 0
const updateOneCompleted = ()=> Object.values(todos).some(todo => todo.do)
const updateAllCompleted = ()=> !Object.values(todos).some(todo => !todo.do) || Object.values(todos).length === 0
const data = {
    /**@type {Object} */
    todos: todos,
    nb_todo: Object.values(todos).filter(todo => !todo.do).length,
    all_completed: updateAllCompleted(),
    one_completed: updateOneCompleted(),
    filter: (window.location.hash || "").replace("#/",""),
    show_todos: updateShow(),
    test:
    {
        0: { name: "HELLO", do: false },
        1: { name: "AS", do: false },
        2: { name: "TODOS", do: false },
    },
}

delete todos

console.log(data.all_completed);

data.todos = data.todos ? data.todos : {}

// console.log(data.todos);
// localStorage.setItem("todos", JSON.stringify(data.test))

function SaveTodo() {
    localStorage.setItem("todos", JSON.stringify(data.todos))
}