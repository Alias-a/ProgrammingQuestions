export class ProgrammingQuestions {
    constructor() {
    }

    static isPalindrome(string) {
        let firstChar = string.charAt(0);
        let lastChar = string.charAt(string.length - 1)
        if (string.length > 2) {
            return firstChar == lastChar && this.isPalindrome(string.substring(1, string.length - 2));
        } else {
            return firstChar == lastChar;
        }
    }
}