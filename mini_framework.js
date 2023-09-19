import data from "./data.js";
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
    /**Insert HTMLElement From JS file */
    insert:
        /**
         * @param {HTMLElement} parentElement 
         * @param {Function<string, number>} createElements 
         */
        (parentElement, createElements) => {
            var updater = () => {
                const newElement = createElements(updater)

                els.forEach(element => {
                    element.remove()
                });
                parentElement.append(...newElement)
                els = newElement
            }
            var els = createElements(updater)
            parentElement.append(...els)
            // console.log("data", data);
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
    data: {
        set: data.set,
        get: data.get,
        update: data.update,
        bind: data.bind,
    },
    /**Field the body with node param*/
    init: (...nodes) => {
        document.body.append(...nodes)
    },
}