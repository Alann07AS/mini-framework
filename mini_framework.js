import element from "./element.js";
/**
 * Alann Schnebelen
 * Mini-framework (mf), is a mini js framework to help with web app dev.
 * 
 *  You will be able to:
 *      -Create an element
 *      -Create an event
 *      -Nest elements
 *      -Add attributes to an element
 *      -Use routing system
 *      -Use state management system
 */


export default {
    create: (parentElement, f) => {
        console.log(parentElement);
        const data = {
            hum: 1
        }
        console.log(f);
        /**@type {HTMLElement} */
        const el = f(data)
        console.log(el.children);
        parentElement.append(el)
        console.log("data", data);
    },
    /**Element is a virtual element of your DOM*/
    element: {
        create: element.create,
    },
    /**Root is the management of your url endpoint to handle action*/
    root: {
        new: function name(params) {

        },

    },
    /**State is variable they will be usable everyware in your framework*/
    state: {
        new: function name(params) {

        },

    },
    /**Field the body with node param*/
    init: (...nodes) => {
        document.body.append(...nodes)
    },
}