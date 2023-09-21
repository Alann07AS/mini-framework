(function () {
    // clear.js

    //save script
    const sripts_clear = document.currentScript


    import("../../mini_framework.js").then(module => {
        const mn = module.default
        mn.insert(sripts_clear, (updater) => {
            mn.data.bind("one_completed", updater)
            return [
                mn.element.create(
                    "button",
                    {
                        class: "clear-completed",
                        style: `display: ${data.one_completed ? "block" : "none"};`,
                        onclick: () => {
                            for (const id in data.todos) {
                                if (data.todos[id].do) {
                                    delete data.todos[id]
                                }
                            }
                            if (Object.keys(data.todos).length === 0) {
                                mn.data.update("show_todos", (_ => false))
                            }
                            mn.data.update("todos", todos => todos)
                            SaveTodo()
                        }
                    },
                    "Clear completed"
                )
            ]
        })
    })
})();