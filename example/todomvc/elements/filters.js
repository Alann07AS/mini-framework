// filters.js

const script_filter = document.currentScript

mn.insert(script_filter, (updater, old_updater) => {
    mn.data.bind("filter", old_updater(old_el => {
        old_el[0].children[0].className = data.filter === "" ? "selected" : ""
        old_el[1].children[0].className = data.filter === "active" ? "selected" : ""
        old_el[2].children[0].className = data.filter === "completed" ? "selected" : ""

    }))
    return [
        mn.element.create(
            "li",
            {

            },
            mn.element.create(
                "a",
                {
                    href: "#/",
                    class: data.filter === "" ? "selected" : ""
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
                    class: data.filter === "active" ? "selected" : ""
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
                    class: data.filter === "completed" ? "selected" : ""
                },
                "Completed"
            ),
        )
    ]
})