// subjects.js


mn.insert(document.currentScript, (updater) => {
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
