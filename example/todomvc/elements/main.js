// main.js

(function () {
    //save script
    const sripts_footer = document.currentScript


    import("../../../mini_framework.js").then(module => {
        const mn = module.default
        mn.insert(sripts_footer, (updater, custom_updater) => {
            mn.data.bind("show_todos", custom_updater((old_el)=>{
                old_el[0].style.display = data.show_todos?"block":"none"
            }))
            return [
                mn.element.create(
                    "section",
                    {
                        class: "main",
                        style: `display: ${data.show_todos?"block":"none"};`,
                        "test": data.test
                    },
                    mn.element.create(
                        "script",
                        {
                            src: "./elements/bt_completed.js"
                        },
                    ),
                    mn.element.create(
                        "ul",
                        {
                            class: "todo-list",
                        },
                        mn.element.create(
                            "script",
                            {
                                src: "./elements/todos.js"
                            }
                        )
                    )
                )
            ]
        })
    })
})();
