// bt_completed.js

const sripts_bt_completed = document.currentScript


mn.insert(sripts_bt_completed, (updater) => {
    mn.data.bind("all_completed", updater)
    return [
        mn.element.create(
            "input",
            Object.assign(
                {
                    id: "toggle-all",
                    class: "toggle-all",
                    type: "checkbox",
                    onclick: (e) => {
                        for (const todoId in data.todos) {
                            data.todos[todoId].do = e.target.checked
                            mn.data.update("nb_todo", _ => e.target.checked ? 0 : Object.keys(data.todos).length)
                            mn.data.update("one_completed", _ => e.target.checked)
                        }
                        mn.data.update("todos", t => t)
                        SaveTodo()
                    }
                },
                data.all_completed ?
                    { checked: "" } : {}
            ),

        ),
        mn.element.create(
            "label",
            {
                for: "toggle-all"
            },
            "Mark all as complete"
        )
    ]
})