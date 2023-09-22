// search.js

(function () {

    //save script
    const script = document.currentScript

    import("../../../mini_framework.js").then(module => {
        const mn = module.default
        mn.insert(script, (updater) => {
            return [
                mn.element.create(
                    "input",
                    {
                        id: "input_subject",
                        list: "subjects_data",
                        onkeyup: (e) => {
                            if (e.key === "Enter") {
                                window.location.href = "#/"+e.target.value
                                // getSubject(e.target.value)
                            }
                        },
                    },
                )
            ]
        })
    })
})();