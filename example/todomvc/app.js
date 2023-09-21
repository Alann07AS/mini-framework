import mini_framework from "../../mini_framework.js";
const mn = mini_framework


mn.rout.create("#/", ()=>{
    mn.data.update("filter", _=> "")
})

mn.rout.create("#/active", ()=>{
    mn.data.update("filter", _=> "active")
})

mn.rout.create("#/completed", ()=>{
    mn.data.update("filter", _=> "completed")
})

// const section = mn.element.create(
//     "section",
//     {
//         class: "todoapp",
//     },
//     mn.element.create("p", null, "HELLO")
// )

// const footer = mn.element.create(
//     "footer",
//     {class: "info"},
    
// )


// mn.init(
//     // section,
//     // footer
// )

