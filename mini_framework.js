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

/**
 * @typedef {} OldElementUpdaterFunction
 */
/**
 * @param {HTMLOrSVGScriptElement} parentElement_script 
 * @param {{
*   (updater: Function, old_element_updater: {(old_element_updater: Array<HTMLElement>) => Function}) => Array<HTMLElement>
* }} createElements 
*/

    insert:
        (parentElement_script, createElements) => {
            /**@type {Array<HTMLElement>}*/
            var els = []
            const updater = () => {
                const newElement = createElements(updater, old_updater)
                for (const el of els) {
                    el.remove()
                }
                for (const el of newElement) {
                    parentElement_script.insertAdjacentElement("beforebegin", el)
                }
                els = newElement
            }
            const old_updater = (f) => {
                return () => {
                    const oldElement = els;
                    f(oldElement)
                }
            }
            els = createElements(updater, old_updater)
            const insert = () => {
                for (const el of els) {
                    parentElement_script.insertAdjacentElement("beforebegin", el)
                }
            }
            insert()
            // window.addEventListener("load", insert, {once: true})
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
        /**
         * 
         * @param {string} key 
         * @param {OldElementUpdaterFunction} updater 
        */
        bind: data.bind,
        remove_bind: data.remove_bind,
    },
    /**Field the body with node param*/
    init: (...nodes) => {
        document.body.append(...nodes)
    },
}