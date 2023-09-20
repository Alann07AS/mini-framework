// todos.js

(function () {
	//save script
	const scripts_todos = document.currentScript


	import("../../mini_framework.js").then(module => {
		const mn = module.default
		mn.insert(scripts_todos, (updater) => {
			mn.data.bind("todos", updater);
			mn.data.bind("filter", updater);
			console.log(data.filter);
			const todos = mn.data.get("todos")
			return Object.entries(todos).filter((value)=> 
			(data.filter !== "#/active" && data.filter !== "#/completed") || // all if all
			(data.filter === "#/active" && !value[1].do) || // unchecked if active
			(data.filter === "#/completed" && value[1].do) // checked if completed
			).map((value) => {
				return mn.element.create(
					"li",
					{ class: value[1].do ? "completed" : "", id: value[0] },
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
									onclick: (e) => {
										/**@type {HTMLElement} */
										const li = e.target.parentElement.parentElement
										const done = e.target.checked
										li.classList.toggle("completed", e.target.checked)
										data.todos[li.id].do = done

										mn.data.update("filter", filter => filter)
										mn.data.update("nb_todo", nb => nb + (done ? -1 : 1))
										mn.data.update("one_completed", _ => Object.values(todos).some(todo => todo.do))
										mn.data.update("all_completed", _ => !Object.values(todos).some(todo => !todo.do))
										SaveTodo() //update todos in localstorage
									}
								}, value[1].do ? { checked: {} } : {}
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
									mn.data.update("nb_todo", (nb => nb - 1))
									el.remove()
								}
							},
						)
					)
				)
			})
		})
	})
})();
