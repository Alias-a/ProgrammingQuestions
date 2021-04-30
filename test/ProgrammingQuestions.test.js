import { ProgrammingQuestions } from "../src/ProgrammingQuestions";

describe('isPalindrome', () => {
    it('should return true when the passed string is a palindrome', () => {
        const result = ProgrammingQuestions.isPalindrome('racecar');
        expect(result).toBe(true);
    })

})