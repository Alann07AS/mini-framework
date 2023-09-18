/**
 * Alann Schnebelen
 * Handling element (or virtual node)
 */


export default {
    create: function (tag, props, ...children) {
        /**@type {HTMLElement} */
        const element = document.createElement(tag);

        if (props) {
            for (const [key, value] of Object.entries(props)) {
                element.setAttribute(key, value);
            }
        }

        for (const child of children) {
            if (typeof child === 'string') {
                element.innerText = child;
            } else {
                if (!child) {continue}
                element.appendChild(child);
            }
        }
        return element;
    },
}
