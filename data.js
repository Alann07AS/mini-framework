/**
 * Alann Schnebelen
 * Handling data (datamanagement)
 */

// data = data ? data : {};

export default {
    set: function (key, value) {
        console.log(key, value);
        data[key] = value;
    },
    get: function (key) {
        return data[key]
    },
    update: function (key, fValue) {
        const onKeys = data["_onKey"+key];
        data[key] = fValue(data[key])
        onKeys.forEach(handler => handler());
        data["_onKey"+key] = onKeys   
    },
    bind: function (key, updater) {
        var onKey = data["_onKey"+key]
        onKey = data["_onKey"+key] = onKey && Array.isArray(onKey) ? onKey :[]
        onKey.push(updater)
    }
}

// app.js est type module donc appeler a la fin donc variable non defini avant function get