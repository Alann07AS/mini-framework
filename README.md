
# Introduction <a name="introduction"></a>
Mini-Framework provides a set of functions and tools to streamline the process of building interactive web applications. It abstracts the complexities of DOM manipulation, allowing developers to focus on building functionality and user interfaces.
[Tout les examples ici.](https://alann07as.github.io/mini-framework/example/demo
# Creating Elements <a name="creating-elements"></a>
To create a  element, you can use the mini-framework.element.create method
```javascript
import mini_framework  from  "../../mini_framework.js";
const mn  =  mini_framework;
const element = mn.element.create('div', { class: 'my-element' }, 'Hello, world!');
```
* The first argument is the HTML tag of the element.
* The second argument is an object of attributes and their values.
* The third or more arguments is children, which can include other virtual DOM elements or text content
# Insert Elements in HTML <a name="rendering-elements"></a>
To insert element to the real DOM, you can use the scrip in your HTML
```html
<div>
	<script  src="./elements/myElement.js"></script>
</div>
```
And use the methode mini-framework.insert, this method take the 
```javascript
//myElement.js
(function() {
		//save actual script element
	const script = document.currentScript
	//call the framework
	import("../../../mini_framework.js").then(module => {
			const mn = module.default
		// setup script element and renderer function to insert new elements 
		mn.insert(script, (updater, old_updater) => {
				return [
					mn.element.create(
						"div", {
							class: "div_hello"
					},
					mn.element.create(
							"p",
						{},
						"Hello, world"
					)
				)
			]
		})
	})
})();
```
# Adding Event Listeners <a name="adding-event-listeners"></a>
You can easily add event listeners create element in properties
```javascript
mn.element.create(
		"p",
	{
			onclick: (e)=> {
				alert("World!")
		}
	},
	"Hello?"
),
```
# Routing <a name="routing"></a>
The mini-framework includes a simple routing mechanism for handling hash endpoint. Here's how you can create and use routes
```javascript
import mini_framework from "../../mini_framework.js";
const mn = mini_framework;
mn.rout.create("#/", () => {
	alert("welcome")
});
mn.rout.create("#/about", () => {
	alert("This framework was write by Alann07AS")
})
```
# State Management <a name="state-management"></a>
The framework provides way to link data to handle auto re render element, you can use the mini-framework.data.bind method
```javascript
// data.js
const data = {
	hello: "world",
}
```
```javascript
//myElement.js
(function() {
	//save actual script element
	const script = document.currentScript
	//call the framework
	import("../../../../mini_framework.js").then(module => {
		const mn = module.default
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
						"p", {},
						"Hello, " + mn.data.get("hello") // data.hello can work to
					)
				)
			]
		})
	})
})();
```
Now element are set to data you can update this data to refresh render
```javascript
//myInput.js
(function() {
	//save actual script element
	const script = document.currentScript
	//call the framework
	import("../../../../mini_framework.js").then(module => {
		const mn = module.default
		mn.insert(script, (updater, old_updater) => {
			return [
				mn.element.create(
					"input", {
						class: "hello_class",
						type: "text",
						value: data.hello,
						oninput: (e) => {
							mn.data.update("hello", (lastValue) => {
								if (e.data) {
									return lastValue + e.data
								} else {
									return lastValue.slice(0, -1)
								}
							})
						}
					}
				)
			]
		})
	})
})();
```
[Example en demo ici.](https://alann07as.github.io/mini-framework/example/helloworld
