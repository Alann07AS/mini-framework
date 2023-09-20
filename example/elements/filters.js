// filters.js

(function () {
    //save script
    const script = document.currentScript
    
    import("../../mini_framework.js").then(module => {
        const mn = module.default
        console.log(data.filter);
        mn.insert(script, (updater) => {
            mn.data.bind("filter", updater)
            return [
                mn.element.create(
                    "li",
                    {

                    },
                    mn.element.create(
                        "a",
                        {
                            href: "#/",
                            class:  data.filter===""?"selected":""
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
                            href: "#/active",
                            class:  data.filter==="active"?"selected":""
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
                            href: "#/completed",
                            class:  data.filter==="completed"?"selected":""
                        },
                        "Completed"
                    ),
                )
            ]
        })
    })
})();