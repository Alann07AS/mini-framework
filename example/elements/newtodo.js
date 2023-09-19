// el.js

//all loaded script
const sripts_newtodo = document.querySelectorAll('script')
// Get the current parent script element
const parentElement_newtodo =
    sripts_newtodo[sripts_newtodo.length - 1].
        parentElement;

import("../../mini_framework.js").then(module => {
    const mn = module.default
    mn.insert(parentElement_newtodo, (updater) => {
        return [
            mn.element.create(
                "input",
                {
                    class: "new-todo",
                    placeholder: "What needs to be done?",
                    autofocus: "",
                    onkeyup: (e) => {
                        const val = e.target.value.trim()
                        if (e.key === "Enter" && val) {
                            mn.data.update("todos", todos => {
                                todos[Date.now()] = { name: val, do: false }; return todos
                            }) //update todos in js
                            SaveTodo() //update todos in localstorage
                            e.target.value = ""
                        }
                    }
                },

            )
        ]
    })
})
