// subjects.js

(function () {

    //save script
    const script = document.currentScript

    import("../../../mini_framework.js").then(module => {
        const mn = module.default
        mn.insert(script, (updater) => {
            mn.data.bind("subjects", updater)
            return data.subjects.filter(subject => subject.type === "dir").map((subject, i) => {
                return mn.element.create(
                    "option",
                    {
                        value: subject.name,
                        arr_id: i
                    },
                )
            })
        })
    })
})();