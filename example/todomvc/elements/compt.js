// compt.js

(function () {
    // Your code here

    //save script
    const sripts_compt = document.currentScript

    import("../../../mini_framework.js").then(module => {
        const mn = module.default
        mn.insert(sripts_compt, (updater) => {
            mn.data.bind("nb_todo", updater)
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