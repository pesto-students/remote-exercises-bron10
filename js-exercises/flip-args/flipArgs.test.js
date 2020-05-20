import { flipArgs } from './flipArgs';

describe('flipArgs', () => {
  it('should return a function', () => {
    expect(typeof flipArgs()).toBe('function');
  });
  it('Returns an array', () => {
    const reversal = flipArgs();
    expect(Array.isArray(reversal(4,5,6))).toBe(true);
  });
  it('Returns the reverse', () => {
    const actualData = [4, 5, 6];
    const reversedData = actualData.reverse();
    const reversal = flipArgs();
    expect(reversal(4,5,6)).toEqual(reversedData);
  });
});
