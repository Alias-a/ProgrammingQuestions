import { ProgrammingQuestions } from "../src/ProgrammingQuestions";

describe('isPalindrome', () => {
    it('should return true when the passed string is a palindrome', () => {
        const result = ProgrammingQuestions.isPalindrome('racecar');
        expect(result).toBe(true);
    })

    it('should return false when passed a non palindrome', () => {
        const result = ProgrammingQuestions.isPalindrome('thing');
        expect(result).toBe(false);
    })

    it('should return false when passed an empty string', () => {
        const result = ProgrammingQuestions.isPalindrome('');
        expect(result).toBe(true);
    })
})