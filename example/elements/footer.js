// footer.js

(function () {
    //save script
    const sripts_footer = document.currentScript


    import("../../mini_framework.js").then(module => {
        const mn = module.default
        mn.insert(sripts_footer, (updater) => {
            mn.data.bind("nb_todo", updater)
            return [
                mn.element.create(
                    "footer",
                    {
                        class: "footer",
                        style: "display: block;"
                    },
                    mn.element.create(
                        "script",
                        {
                            src: "./elements/compt.js"
                        },
                        `${data.nb_todo}`
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
    })
})();
