function sum(a, b) {
    if ((typeof (a) !== 'number') || (typeof (b) !== 'number')) {
        throw new TypeError();
    }

    const sum = a + b;
    return sum;
}

module.exports = sum;
