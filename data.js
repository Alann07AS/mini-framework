/**
 * Alann Schnebelen
 * Handling data (datamanagement)
 */

// data = data ? data : {};

const _updaters = {}

export default {
    set: function (key, value) {
        console.log(key, value);
        data[key] = value;
    },
    get: function (key) {
        return data[key]
    },
    update: function (key, fValue) {
        const onKey = _updaters[key];
        data[key] = fValue(data[key])
        if (onKey) {
            onKey()
        }
    },
    bind: function (key, updater) {
        var onKey = _updaters[key]
        if (!onKey) {
            _updaters[key] = updater
        }
    }
}

// app.js est type module donc appeler a la fin donc variable non defini avant function get