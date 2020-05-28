import { map, filter, invert, merge, all, some } from './objectUtils';

// write your own test cases
describe('Test Map utility', function(){
    test('test emptiness of input {}/null/undefined', function(){
        const obj = {}; 
        expect(map(obj)).toEqual(obj);
        expect(map()).toEqual(obj);
        expect(map(null)).toEqual(obj);
    })

    test('test with defined object data', function(){
        const obj = {a : "hello", b : "world"};
        const foo = jest.fn();
        const newObject = map(obj, foo);
        expect (Object.keys(newObject)).toEqual(Object.keys(obj));
        expect(foo).toHaveBeenCalledTimes(2);
    })
})

describe('Test Filter utility', function(){
    test('test emptiness of input {}/null/undefined', function(){
        const obj = {}; 
        expect(filter(obj)).toEqual(obj);
        expect(filter()).toEqual(obj);
        expect(filter(null)).toEqual(obj);
    })

    test('test with defined object data', function(){
        const obj = {a : "hello", b : "world"};
        const foo = (k ,v)=>v==="hello";
        map(obj, foo);
        expect(obj).toMatchObject({a : "hello"});
    })
})

describe('Test Invert utility', function(){
    test('test emptiness of input {}/null/undefined', function(){
        const obj = {}; 
        expect(invert(obj)).toEqual(obj);
        expect(invert()).toEqual(obj);
        expect(invert(null)).toEqual(obj);
    })

    test('test with defined object data', function(){
        const obj = {a : "hello", b : "world"};
        const reverseObj = invert(obj);
        expect(obj).toEqual(reverseObj);
    })
})


describe('Test Merge utility', function(){
    test('test emptiness of input {}/null/undefined', function(){
        const obj = {}; 
        expect(merge(obj)).toEqual(obj);
        expect(merge()).toEqual(obj);
        expect(merge(null)).toEqual(obj);
    })

    test('test with defined object data having same keys', function(){
        const obj1 = {a : "hello", b : "world"};
        const obj2 = {a : "new", b : "planet"};
        const mergedObj = merge(obj1, obj2);
        expect(mergedObj).toEqual(obj2);
    })

    test('test with defined object data having different keys', function(){
        const obj1 = {a : "hello"};
        const obj2 = {b : "new", c : "planet"};
        const mergedObj = merge(obj1, obj2);
        expect(mergedObj).toEqual({a : "hello", b : "new", c : "planet"});
    })
})

describe('Test All utility', function(){
    test('test emptiness of input {}/null/undefined', function(){
        const obj = {}; 
        expect(all(obj)).toEqual(false);
        expect(all()).toEqual(false);
        expect(all(null)).toEqual(false);
    })

    test('test with defined object data should return true', function(){
        const foo = jest.fn();
        const isBelowThreshold = (k, v) => {foo(); return v < 40};
        const array1 = {a : 1, b : 30, c : 39};
        const result = all(array1, isBelowThreshold);
        expect(result).toEqual(true);
        expect(foo).toHaveBeenCalledTimes(3);
    })
    
    test('test with defined object data should return false', function(){
        const foo = jest.fn();
        const isBelowThreshold = (k, v) => {foo(); return v == 40};
        const array1 = {a : 1, b : 30, c : 39};
        const result = all(array1, isBelowThreshold);
        expect(result).toEqual(false);
        expect(foo).toHaveBeenCalledTimes(3);
    })
})


describe('Test Some utility', function(){
    test('test emptiness of input {}/null/undefined', function(){
        const obj = {}; 
        expect(some(obj)).toEqual(false);
        expect(some()).toEqual(false);
        expect(some(null)).toEqual(false);
    })

    test('test with defined data matches starting key.value  should return true', function(){
        const foo = jest.fn();
        const isBelowThreshold = (k, v) => {foo(); return v === 1};
        const array1 = {a : 1, b : 30, c : 39};
        const result = some(array1, isBelowThreshold);
        expect(result).toEqual(true);
        expect(foo).toHaveBeenCalledTimes(1);
    })
    
    test('test with defined data matches second key.value should return true', function(){
        const foo = jest.fn();
        const isBelowThreshold = (k, v) => {foo(); return v == 30};
        const array1 = {a : 1, b : 30, c : 39};
        const result = some(array1, isBelowThreshold);
        expect(result).toEqual(true);
        expect(foo).toHaveBeenCalledTimes(2);
    })

    test('test with defined data doesnt matches any key.value should return false', function(){
        const foo = jest.fn();
        const isBelowThreshold = (k, v) => {foo(); return v == 45};
        const array1 = {a : 1, b : 30, c : 39};
        const result = some(array1, isBelowThreshold);
        expect(result).toEqual(false);
        expect(foo).toHaveBeenCalledTimes(3);
    })
})