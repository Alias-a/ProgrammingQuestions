import { ProgrammingQuestions } from "../src/ProgrammingQuestions";

describe('isPalindrome', () => {
    it('should return true when the passed string is a palindrome', () => {
        const result = ProgrammingQuestions.isPalindrome('racecar');
        expect(result).toBe(true);
    });

    it('should return false when passed a non palindrome', () => {
        const result = ProgrammingQuestions.isPalindrome('thing');
        expect(result).toBe(false);
    });

    it('should return false when passed an empty string', () => {
        const result = ProgrammingQuestions.isPalindrome('');
        expect(result).toBe(true);
    });
})

describe('binaryGap', () => {
    it('should return 0 when the number is 1', () => {
        const result = ProgrammingQuestions.binaryGap(32);
        expect(result).toBe(0);
    });

    it('should return 0 when the number only has trailing zeros', () => {
        const result = ProgrammingQuestions.binaryGap(32);
        expect(result).toBe(0);
    });

    it('should return 5 when the given number is 1041', () => {
        const result = ProgrammingQuestions.binaryGap(1041);
        expect(result).toBe(5);
    });

    it('should return 0 when the number is 2147483647', () => {
        const result = ProgrammingQuestions.binaryGap(32);
        expect(result).toBe(0);
    });

});

describe('rotateArray', () => {
    it('should return empty array when the array is empty', () => {
        const result = ProgrammingQuestions.rotateArray([], 1);
        expect(result).toStrictEqual([]);
    });

    it('should return the original array when array length is equal to steps to rotate', () => {
        const result = ProgrammingQuestions.rotateArray([1, 2, 3, 4], 4);
        expect(result).toStrictEqual([1, 2, 3, 4]);
    });

    it('should return the original array when all array items are the same', () => {
        const result = ProgrammingQuestions.rotateArray([1, 1, 1, 1], 2);
        expect(result).toStrictEqual([1, 1, 1, 1]);
    });

    it('should return the array appropriately rotated when the steps to rotate is 1', () => {
        const result = ProgrammingQuestions.rotateArray([1, 2, 3, 4], 1);
        expect(result).toStrictEqual([4, 1, 2, 3]);
    });

    it('should return the array appropriately rotated when the steps to rotate is between 1 and array length', () => {
        const result = ProgrammingQuestions.rotateArray([1, 2, 3, 4], 3);
        expect(result).toStrictEqual([2, 3, 4, 1]);
    });

});

describe('intersectingDisks', () => {
    it('should return 0 when the array is empty', () => {
        const result = ProgrammingQuestions.intersectingDisks([]);
        expect(result).toStrictEqual(0);
    });

    it('should return 11 when there are 11 intersecting disks', () => {
        const result = ProgrammingQuestions.intersectingDisks([1, 5, 2, 1, 4, 0]);
        expect(result).toStrictEqual(11);
    });

    it('should return -1 when there are over 10000000 intersecting disks', () => {
        let testArrayOfDisks = [10000];
        let i = 0;
        while (i <= 10000) {
            testArrayOfDisks[i] = 10000;
        }

        const result = ProgrammingQuestions.intersectingDisks(testArrayOfDisks);
        expect(result).toStrictEqual(-1);
    });

    describe('smallestIntegerNotInArray', () => {
        it('should return 0 when the array is empty', () => {
            const result = ProgrammingQuestions.smallestIntegerNotInArray([]);
            expect(result).toStrictEqual(0);
        });

        it('should return 5 when the array is  [1, 3, 6, 4, 1, 2]', () => {
            const result = ProgrammingQuestions.smallestIntegerNotInArray( [1, 3, 6, 4, 1, 2]);
            expect(result).toStrictEqual(5);
        });

        it('should return 4 when the array is  [1, 2, 3]', () => {
            const result = ProgrammingQuestions.smallestIntegerNotInArray( [1, 2, 3]);
            expect(result).toStrictEqual(4);
        });

        it('should return 1 when the array is  [-1, -3]', () => {
            const result = ProgrammingQuestions.smallestIntegerNotInArray( [-1, -3]);
            expect(result).toStrictEqual(1);
        });

        it('should return 4 when the array is  [1, 2, 3]', () => {
            const result = ProgrammingQuestions.smallestIntegerNotInArray( [1, 2, 3]);
            expect(result).toStrictEqual(4);
        });

        it('should return 1 when the array is at extreme limits', () => {
            const result = ProgrammingQuestions.smallestIntegerNotInArray( [-1000000,1000000]);
            expect(result).toStrictEqual(1);
        });

        it('should return 500000 in a reasonable amount of time when array size is 1000000', () => {
            let testArray = [];
            for (let i = 0; i < 1000000; i++) { testArray.push(i) }
            testArray[500000] = 500001;
            const result = ProgrammingQuestions.smallestIntegerNotInArray(testArray);
            expect(result).toStrictEqual(500000);
        });
    });

    describe('leftmostPosition', () => {
        it('should return 2 when given values are 53, 1953786', () => {
            const result = ProgrammingQuestions.leftmostPosition(53, 1953786);
            expect(result).toStrictEqual(2);
        });

        it('should return -1 when the larger number is not larger', () => {
            const result = ProgrammingQuestions.leftmostPosition(53, 52);
            expect(result).toStrictEqual(-1);
        });

        it('should return -1 when given values 0, 999999999', () => {
            const result = ProgrammingQuestions.leftmostPosition(0, 999999999);
            expect(result).toStrictEqual(-1);
        });

        it('should return 8 when given values 0, 999999990', () => {
            const result = ProgrammingQuestions.leftmostPosition(0, 999999990);
            expect(result).toStrictEqual(8);
        });

        it('should return 4 when given values are 78, 195378678', () => {
            const result = ProgrammingQuestions.leftmostPosition(78, 195378678);
            expect(result).toStrictEqual(4);
        });

        it('should return -1 when given value is not in the larger number', () => {
            const result = ProgrammingQuestions.leftmostPosition(57, 153786);
            expect(result).toStrictEqual(-1);
        });

        it('should return 0 when given values are 999999999, 999999999', () => {
            const result = ProgrammingQuestions.leftmostPosition(999999999, 999999999);
            expect(result).toStrictEqual(0);
        });
    });

    describe('stringTransformation', () => {
        it('should return C when given value is CBACD', () => {
            const result = ProgrammingQuestions.stringTransformation('CBACD');
            expect(result).toStrictEqual('C');
        });

        it('should return \'\' when given value is \'\'', () => {
            const result = ProgrammingQuestions.stringTransformation('');
            expect(result).toStrictEqual('');
        });

        it('should return \'\' when given value is CABABD', () => {
            const result = ProgrammingQuestions.stringTransformation('CABABD');
            expect(result).toStrictEqual('');
        });

        it('should return starting string when given string cannot be transformed at all', () => {
            const result = ProgrammingQuestions.stringTransformation('ACBDACBD');
            expect(result).toStrictEqual('ACBDACBD');
        });

        it('should gracefully handle max input', () => {
            let string = '';
            while (string.length < 250000) {
                string += 'CABD'
            }
            const result = ProgrammingQuestions.stringTransformation(string);
            expect(result).toStrictEqual('');
        });
    });
})
