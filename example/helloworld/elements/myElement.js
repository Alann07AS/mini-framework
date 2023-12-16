//myElement.js
const script = document.currentScript
//call the framework
// setup script element and renderer function to insert new elements 
mn.insert(script, (updater, old_updater) => {
	//bind the updater to a specifique data key
	mn.data.bind("hello", updater)
	// bind "hello" to "updater" will destroy and render again element bellow
	return [
		mn.element.create(
			"div", {
			class: "div_hello"
		},
			mn.element.create(
				"p",
				{},
				"Hello, " + mn.data.get("hello") // data.hello can work to
			)
		)
	]
})
