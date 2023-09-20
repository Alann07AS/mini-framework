import data from "./data.js";
import element from "./element.js";
import rout from "./rout.js";
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
         * @param {HTMLElement} parentElement_script 
         * @param {Function<string, number>} createElements 
         */
        (parentElement_script, createElements) => {
            var updater = () => {
                const newElement = createElements(updater)
                for (const el of els) {
                    el.remove()
                }
                for (const el of newElement) {
                    parentElement_script.insertAdjacentElement("beforebegin", el)
                }
                els = newElement
            }
            var els = createElements(updater)
            for (const el of els) {
                parentElement_script.insertAdjacentElement("beforebegin", el)
            }
            // console.log("data", data);
        },
    /**Element is a virtual element of your DOM*/
    element: {
        create: element.create,
    },
    /**Root is the management of your url endpoint to handle action*/
    rout: {
        create: rout.create

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