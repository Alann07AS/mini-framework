//myInput.js
(function () {
    //save actual script element
    let script = document.currentScript
    //call the framework
    mn.insert(script, (updater, old_updater) => {
        return [
            mn.element.create(
                "input", {
                class: "hello_class",
                type: "text",
                value: mn.data.get("hello" + (script.hasAttribute("old") ? "2" : "")),
                oninput: (/**@type{HTMLEvent}*/e) => {
                    mn.data.update("hello" + (script.hasAttribute("old") ? "2" : ""), _ => e.target.value)
                }
            }
            )
        ]
    })
})();
