// search.js


const script = document.currentScript

mn.insert(script, (updater) => {
    return [
        mn.element.create(
            "input",
            {
                id: "input_subject",
                list: "subjects_data",
                onkeyup: (e) => {
                    if (e.key === "Enter") {
                        window.location.href = "#/" + e.target.value
                        // getSubject(e.target.value)
                    }
                },
            },
        )
    ]
})
