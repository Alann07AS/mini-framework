//demos.js
(function() {
	//save actual script element
	const script = document.currentScript
	//call the framework
	import("../../../mini_framework.js").then(module => {
		const mn = module.default
		mn.insert(script, (updater, old_updater) => {
			// mn.data.bind("demos",updater)
			return [
				mn.element.create(
					"ul", {
						class: "list"
					},
                    ...data.demos.map(value=>{
                        return mn.element.create(
                            "li",
                            {
                            },
                            mn.element.create(
                                "a",
                                {
                                    href: "http://"+window.location.host+value.href
                                },
                                value.titre
                            ),
							mn.element.create(
                                "p",
                                {
                                },
								value.logo
                            )
                        )
                    })
				)
			]
		})
	})
})();
