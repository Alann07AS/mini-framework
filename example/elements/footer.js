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
                            class:"filters"
                        },
                        mn.element.create(
                            "li",
                            {

                            },
                            mn.element.create(
                                "a",
                                {
                                    href:"#/",
                                    class:"selected"
                                },
                                "All"
                            )
                        ),
                        mn.element.create(
                            "li",
                            {

                            },
                            mn.element.create(
                                "a",
                                {
                                    href:"#/active"
                                },
                                "Active"
                            ),
                        ),
                        mn.element.create(
                            "li",
                            {

                            },
                            mn.element.create(
                                "a",
                                {
                                    href:"#/completed"
                                },
                                "Completed"
                            ),
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
