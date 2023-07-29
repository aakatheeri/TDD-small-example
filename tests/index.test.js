const { removeEverySecond } = require('../index.js')

describe('My array', () => {

    let array = ['hello', 'world', 'its', 'dark', 'today']

    it('removes every second element', () => {
        thinnedArray = removeEverySecond(array)
        // toStrictEqual is needed because of deep equality in arrays
        expect(thinnedArray).toStrictEqual(['hello', 'its', 'today'])
    });

    it('keeps every first element', () => {
        thinnedArray = removeEverySecond(array)
        expect(thinnedArray).toStrictEqual(['hello', 'its', 'today'])
    });
});