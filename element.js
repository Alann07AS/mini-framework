/**
 * Alann Schnebelen
 * Handling element (or virtual node)
 */


export default {
    create: function (tag, props, ...children) {
        /**@type {HTMLElement} */
        const element = document.createElement(tag);

        if (props) {
            for (const [attr, value] of Object.entries(props)) {
                if (attr.startsWith('on')) {
                    const eventType = attr.substring(2).toLowerCase();
                    element.addEventListener(eventType, value);
                } else {
                    element.setAttribute(attr, value);
                }
            }
        }

        for (const child of children) {
            if (typeof child === 'string') {
                element.innerHTML += child;
            } else {
                if (!child) { continue }
                element.append(child);
            }
        }
        return element;
    },
    // event: function () {

    // }
}
