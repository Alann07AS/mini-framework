// el.js

//all loaded script
const sripts = document.querySelectorAll('script')
// Get the current parent script element
var parentElement =
    sripts[sripts.length - 1].
        parentElement;

console.log(parentElement);



import("../../mini_framework.js").then(module => {
    const mn = module.default
    mn.create(parentElement, (data) => {
        data.name = "there"
        return mn.element.create(
            "li",
            { class: "", id: 0 },
            mn.element.create(
                "div",
                { class: "view" },
                mn.element.create(
                    "input",
                    { class: "toggle", type: "checkbox" },
                ),
                mn.element.create(
                    "label",
                    {},
                    data.name
                ),
                mn.element.create(
                    "button",
                    { class: "destroy"},
                )
            )
        )
    })
})


