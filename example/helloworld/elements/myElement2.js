//myElement2.js
const script2 = document.currentScript
//call the framework
// setup script element and renderer function to insert new elements 
mn.insert(script2, (updater, old_updater) => {
	//bind the updater to specifique data key
	mn.data.bind("hello2", old_updater(old_element => {
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
