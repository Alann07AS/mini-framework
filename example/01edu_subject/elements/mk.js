// audit.js

(function () {

    //save script
    const script = document.currentScript
    var converter = new showdown.Converter()
    converter.setFlavor('github');
    converter.setOption('moreStyling', true);
    converter.setOption('ghCodeBlocks', true);
    mn.insert(script, (updater) => {
        mn.data.bind("subject", updater)
        const html = converter.makeHtml(data.subject[script.getAttribute("mk")]);
        return [
            mn.element.create(
                "div",
                {

                },
                html
            )
        ]
    })
})();