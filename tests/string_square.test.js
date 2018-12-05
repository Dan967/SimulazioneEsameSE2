const funzione = require('../string_square');
const stringsquare = funzione.string_square;

test('test if with ciao returns 16', () => {
	expect(stringsquare('ciao')).not.toBeNull;
	expect(stringsquare('ciao')).not.toBeUndefined;
	expect(typeof stringsquare('ciao')).toBe('number');
    expect(stringsquare('ciao')).toBe(16);
});
test('test if with empty string returns 0', () => {
	expect(stringsquare('')).not.toBeNull;
	expect(stringsquare('')).not.toBeUndefined;
	expect(typeof stringsquare('')).toBe('number');
    expect(stringsquare('')).toBe(0);
});
test('test if with null or undefined returns -1', () => {
	expect(stringsquare(null)).not.toBeNull;
	expect(stringsquare(null)).not.toBeUndefined;
	expect(stringsquare(undefined)).not.toBeNull;
	expect(stringsquare(undefined)).not.toBeUndefined;
	expect(typeof stringsquare(null)).toBe('number');
	expect(typeof stringsquare(undefined)).toBe('number');
    expect(stringsquare(null)).toBe(-1);
    expect(stringsquare(undefined)).toBe(-1);
});
