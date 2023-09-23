// compt.js

(function () {
    // Your code here

    //save script
    const script = document.currentScript

    import("../../../mini_framework.js").then(module => {
        const mn = module.default
        mn.insert(script, (updater, old_updater) => {
            mn.data.bind("nb_todo", old_updater((/**@type {Array<HTMLElement>}*/d)=>{
                d[0].children[0].textContent = data.nb_todo
            }))
            return [
                mn.element.create(
                    "span",
                    {
                        class: "todo-count"
                    },
                    mn.element.create(
                        "strong",
                        {},
                        `${data.nb_todo}`
                    ),
                    " items left"
                )
            ]
        })
    })
})();