import { isObject } from 'utils';

const omit = (obj, props, fn) => {
    if (!isObject(obj)) return {};

    if (typeof props === 'function') {
        fn = props;
        props = [];
    }

    if (typeof props === 'string') {
        props = [props];
    }

    const isFunction = (typeof fn === 'function');
    const keys = Object.keys(obj);
    const res = {};

    for (let i = 0; i < keys.length; i++) {
        var key = keys[i];
        var val = obj[key];

        if (!props || (props.indexOf(key) === -1 && (!isFunction || fn(val, key, obj)))) {
            res[key] = val;
        }
    }
    return res;
};

export default omit;