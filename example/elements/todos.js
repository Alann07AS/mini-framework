// el.js

//all loaded script
var sripts_todos = document.querySelectorAll('script')
// Get the current parent script element
var parentElement_todos =
	sripts_todos[sripts_todos.length - 1].
		parentElement;


import("../../mini_framework.js").then(module => {
	const mn = module.default
	mn.insert(parentElement_todos, (updater) => {
		mn.data.bind("todos", updater)
		const todos = mn.data.get("todos")
		return Object.entries(todos).map((value) => {
			var hello = "there"
			return mn.element.create(
				"li",
				{ class: value[1].do?"completed":"", id: value[0] },
				mn.element.create(
					"div",
					{ class: "view" },
					// ckeckbox to valid todo as done
					mn.element.create(
						"input",
						Object.assign(
							{
								class: "toggle",
								type: "checkbox",
								onclick: (e)=>{
									/**@type {HTMLElement} */
									const li = e.target.parentElement.parentElement
									const done = e.target.checked
									li.classList.toggle("completed", e.target.checked)
									data.todos[li.id].do = done
									SaveTodo() //update todos in localstorage
									console.log(data.todos);
								}
							}, value[1].do?{checked: {}}:{}
						),
					),
					// test with the todo value
					mn.element.create(
						"label",
						{
							ondblclick: (e) => {
								/**@type {HTMLElement}*/
								const el = e.target
								const li = el.parentElement.parentElement

								const validHandler = (e_valid) => {
									const val = tempEl.value.trim()
									if ((e_valid.key === "Enter" || e_valid.target !== tempEl) && val) {
										mn.data.update("todos", todos => {
											todos[li.id] = { name: val, do: todos[li.id].do };
											return todos
										}) //update todos in js
										window.removeEventListener("click", validHandler)
										tempEl.remove()
										li.classList.toggle("editing", false)
										SaveTodo() //update todos in localstorage
									}
								}
								
								const tempEl = mn.element.create("input", {
									class: "edit",
									onkeyup: validHandler
								})
								window.addEventListener("click", validHandler)

								li.classList.toggle("editing", true)
								li.append(tempEl)
								tempEl.focus()
								tempEl.value = el.innerText
							}
						},
						value[1].name
					),
					// boutton remove
					mn.element.create(
						"button",
						{
							class: "destroy",
							onclick: (e) => {
								const el = e.target.parentElement.parentElement
								delete data.todos[el.id]
								SaveTodo() //update todos in localstorage
								el.remove()
							}
						},
					)
				)
			)
		})
	})
})
