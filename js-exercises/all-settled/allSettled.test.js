import {allSettled} from './allSettled';
describe('Test allSettled Promise utility', () => {

    test('Test iterable with expected output', () => {
        return allSettled([
            Promise.resolve(33),
            new Promise(resolve => setTimeout(() => resolve(66), 0)),
            99,
            Promise.reject(new Error('an error'))
            ]).then(data => {
            expect(data).toEqual([
            {status: "fulfilled", value: 33},
            {status: "fulfilled", value: 66},
            {status: "fulfilled", value: 99},
            {status: "rejected",  reason:  'an error'}
            ]);
        });
    });

    test('Test iterable with expected output text', () => {
        const promise1 = Promise.resolve(3);
        const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
        const promises = [promise1, promise2];
        const output = ["fulfilled", "rejected"]
        allSettled(promises).
          then((results) => results.forEach((result, index) => {
            expect(result.status).toEqual(output[index])
          }));   
    });

    test('Test an empty iterable', () => {
        allSettled()
        .catch((err)=>{
            expect(err).toEqual('No iterable provided')
        })   
    });
})