const request = require('supertest');
const server = require('../app.js');

const funzione = require('../string_square');
const stringsquare = funzione.string_square;

test('test if the API returns a correct JSON', async () =>
{
	var response = await request(server).get('/square/');
	expect(response).not.toBeNull();
	expect(response.body).toBeDefined();
	expect(response.body).not.toBeNull();
	expect(response.get('content-type')).toBeDefined();
	expect(response.get('content-type')).not.toBeNull();
	expect(response.get('content-type')).toContain('application/json');
	
	var body_keys = ['result']
	expect(typeof response.body).toEqual('object');
	expect(Object.keys(response.body).sort()).toEqual(body_keys);
	expect(typeof response.body.result).toEqual('number');
	expect(response.body.result).not.toBeNull();
	expect(response.body.result).toBeDefined();
});
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

// close the server after the test
afterAll(() => {
    server.close();
});
