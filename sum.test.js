const sum = require('./sum');
test('adds 12 + 2 to equal 14', () => {
expect(sum(12, 2)).toBe(14);
});
test('adds 5 + 7 to equal 12', () => {
expect(sum(5, 7)).toBe(12);
});
