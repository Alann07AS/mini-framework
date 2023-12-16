// footer.js

const sript_footer = document.currentScript


mn.insert(sript_footer, (updater, old_updater) => {
    mn.data.bind("show_todos", old_updater((old_el) => {
        old_el[0].style.display = data.show_todos ? "block" : "none"
    }))
    return [
        mn.element.create(
            "footer",
            {
                class: "footer",
                style: `display: ${data.show_todos ? "block" : "none"};`
            },
            mn.element.create(
                "script",
                {
                    src: "./elements/compt.js"
                },
            ),
            mn.element.create(
                "ul",
                {
                    class: "filters",
                    // onclick: _ => mn.data.update("filter")
                },
                mn.element.create(
                    "script",
                    {
                        src: "./elements/filters.js"
                    }
                )
            ),
            mn.element.create(
                "script",
                {
                    src: "./elements/clear.js"
                },
            ),
        )
    ]
})
