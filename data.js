/**
 * Alann Schnebelen
 * Handling data (datamanagement)
 */

// data = data ? data : {};

const _updaters = new Map();

export default {
    set: function (key, value) {
        data[key] = value;
    },
    get: function (key) {
        return data[key]
    },
    update: function (key, fValue) {
        const onKey = _updaters.get(key);
        data[key] = fValue(data[key]);
        if (onKey) {
            for (const updater of onKey.keys()) {
                updater();
            }
        }
    },
    /**
     * @typedef {(old_element_updater: Array<HTMLElement>) => Function} OldElementUpdaterFunction
     */
    /**
     * @param {string} key 
     * @param {OldElementUpdaterFunction} updater 
     */
    bind: function (key, updater) {
        // Get or create a Set for the updater functions associated with the key
        const onKey = _updaters.get(key) || new Set();

        // Add the updater function to the Set
        onKey.add(updater);

        // Update the Map with the Set of updater functions
        _updaters.set(key, onKey);
    },
    remove_bind: function (key, updater) {
        // Get or create a Set for the updater functions associated with the key
        const onKey = _updaters.get(key);

        if (onKey && onKey.has(updater)) {
            onKey.delete(updater)
        }
    }
}
