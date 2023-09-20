// el.js

(function () {
    //save script
    const sripts_newtodo = document.currentScript


    import("../../mini_framework.js").then(module => {
        const mn = module.default
        mn.insert(sripts_newtodo, (updater) => {
            return [
                mn.element.create(
                    "input",
                    {
                        class: "new-todo",
                        placeholder: "What needs to be done?",
                        autofocus: "",
                        onfocus: (e) => {
                            console.log("HELLo");
                            const validation =
                                (ev) => {
                                    const val = e.target.value.trim()
                                    if ((ev.key === "Enter" || ev.target !== e.target) && val) {
                                        mn.data.update("todos", todos => {
                                            todos[Date.now()] = { name: val, do: false }; return todos
                                        }) //update todos in js
                                        SaveTodo() //update todos in localstorage
                                        mn.data.update("nb_todo", (nb => nb + 1))
                                        e.target.value = ""
                                        window.removeEventListener("click", validation)
                                        e.target.removeEventListener("keyup", validation)
                                    }
                                }
                            e.target.addEventListener("keyup", validation)
                            window.addEventListener("click", validation)
                        }
                    },
                )
            ]
        })
    })
})();
