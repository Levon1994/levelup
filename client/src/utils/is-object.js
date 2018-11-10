const isObject = (x, y) => {
    // SameValue algorithm
    if (x === y) { // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
    } else {
        // Step 6.a: NaN == NaN
        // https://eslint.org/docs/rules/no-self-compare
        return isNaN(x) && isNaN(y);
    }
}

export default isObject;