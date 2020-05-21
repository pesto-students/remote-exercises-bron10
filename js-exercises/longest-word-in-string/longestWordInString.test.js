import { longestWordInString } from './longestWordInString';

describe('longestWordInString', () => {
  // write your own test cases
  it('Return Empty', () => {
    expect(longestWordInString()).toEqual('');
  });

  it("Return longest word in 'A picture is worth a thousand words'", () => {
    expect(longestWordInString('A picture is worth a thousand words')).toEqual('thousand');
  });

  it("Return longest word in 'aa bb cc", () => {
    expect(longestWordInString('aa bb cc')).toEqual('aa');
  });

  it("testing mutiple blank spaces", () => {
    expect(longestWordInString('   ')).toEqual('');
  });
});