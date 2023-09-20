/**
 * Alann Schnebelen
 * Handling routing system
 */

const _routs = {}

window.addEventListener('hashchange', () => {
    _routs[window.location.hash]();
})

export default {
    create: function (path, handler) {
        _routs[path] = handler
    },
    remove: function (path) {
        delete _routs[path]
    },
}
