// compt.js


const script = document.currentScript

mn.insert(script, (updater, old_updater) => {
    mn.data.bind("nb_todo", old_updater((/**@type {Array<HTMLElement>}*/d) => {
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
