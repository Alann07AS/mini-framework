//myElement2.js
(function() {
	//save actual script element
	const script = document.currentScript
	//call the framework
	import("../../../mini_framework.js").then(module => {
		const mn = module.default
		// setup script element and renderer function to insert new elements 
		mn.insert(script, (updater, old_updater) => {
			//bind the updater to specifique data key
			mn.data.bind("hello2",old_updater(old_element=>{
				old_element[0].children[0].textContent = "Hello, " + mn.data.get("hello2")
			}))
			// bind "hello" to "updater" will destroy and render again element bellow
			return [
				mn.element.create(
					"div", {
						class: "div_hello"
					},
					mn.element.create(
						"p",
						{},
						"Hello, " + mn.data.get("hello2") // data.hello can work to
					)
				)
			]
		})
	})
})();