// el.js

const sripts_newtodo = document.currentScript

mn.insert(sripts_newtodo, (updater) => {
    return [
        mn.element.create(
            "input",
            {
                class: "new-todo",
                placeholder: "What needs to be done?",
                autofocus: "",
                onfocus: (e) => {
                    const validation =
                        (/**@type{Event}*/ev) => {
                            ev.stopPropagation()
                            const val = e.target.value.trim()
                            if ((ev.key === "Enter" || ev.type === "blur") && val) {
                                if (Object.keys(data.todos).length === 0) {
                                    mn.data.update("show_todos", (_ => true))
                                }
                                mn.data.update("todos", todos => {
                                    todos[Date.now()] = { name: val, do: false }; return todos
                                }) //update todos in js
                                SaveTodo() //update todos in localstorage
                                mn.data.update("nb_todo", (nb => nb + 1))
                                mn.data.update("all_completed", _ => updateAllCompleted())
                                e.target.value = ""
                                e.target.removeEventListener("blur", validation)
                            }
                            if (ev.type === "blur") {
                                e.target.removeEventListener("keyup", validation)
                            }
                        }
                    e.target.addEventListener("blur", validation)
                    e.target.addEventListener("keyup", validation)
                }
            },
        )
    ]
})