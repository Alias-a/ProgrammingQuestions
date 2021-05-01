export class ProgrammingQuestions {
    constructor() {
    }

    static isPalindrome(string) {
        let firstChar = string.charAt(0);
        let lastChar = string.charAt(string.length - 1)
        if (string.length > 2) {
            return firstChar === lastChar && this.isPalindrome(string.substring(1, string.length - 1));
        } else {
            return firstChar === lastChar;
        }
    }

    static binaryGap(number) {
       let binaryStringNumber = number.toString(2);
       let runningMaxGap = 0, maxGap = 0;
       let firstOneSeen = false;
       [...binaryStringNumber].forEach(binaryNumberChar => {
           if (binaryNumberChar === '0' && firstOneSeen) {
               runningMaxGap++;
           } else {
               if (runningMaxGap === 0) { firstOneSeen = true; }
               if (runningMaxGap > maxGap) {
                   maxGap = runningMaxGap;
               }
               runningMaxGap = 0;
           }
       });

       return maxGap;
    }

    static rotateArray(array, stepsToRotate) {
        let actualStepsToRotate = stepsToRotate % array.length;
        if (array.length === 0 || actualStepsToRotate === 0) { return array; }

        let newArray = [];
        array.forEach((item, index) => {
            let newArrayPosition = (index + stepsToRotate) % array.length;
            newArray[newArrayPosition] = item;
        });

        return newArray;
    }

    static intersectingDisks(arrayOfDisks) {
        let intersectingDisks = 0;


        for (let centerPositionOne = 0; centerPositionOne < arrayOfDisks.length; centerPositionOne++) {
            for (let centerPositionTwo = centerPositionOne + 1; centerPositionTwo < arrayOfDisks.length; centerPositionTwo++) {
                if (intersectingDisks >= 10000000) {  intersectingDisks = -1; break; }

                let diskRadiusOne = arrayOfDisks[centerPositionOne];
                let diskRadiusTwo = arrayOfDisks[centerPositionTwo];
                let diskOne = {
                    centerPosition: centerPositionOne,
                    radius: diskRadiusOne
                };
                let diskTwo = {
                    centerPosition: centerPositionTwo,
                    radius: diskRadiusTwo
                }
                if (this.disksIntersect(diskOne, diskTwo)) { intersectingDisks++; }
            }
        }

        return intersectingDisks;
    }

    static disksIntersect(diskOne, diskTwo) {
        if (diskOne.centerPosition === diskTwo.centerPosition) { return false; }

        // the disks will intersect if disk one position + diskOneRadius >= diskTwoPosition - diskTwoRadius
        let diskOneEndsAt = diskOne.centerPosition + diskOne.radius;
        let diskTwoStartsAt = diskTwo.centerPosition - diskTwo.radius;
        return (diskOneEndsAt >= diskTwoStartsAt);
    }

    static smallestIntegerNotInArray(array) {
        if (array.length === 0) return 0;

        array.sort((a, b) => a - b);

        let previousNumber = 0;
        for (let i = 0; i < array.length; i++) {
            let number = array[i];

            if (number >= 0) {
                if (number - previousNumber > 1) { return (previousNumber + 1);}
                previousNumber = number;
            }
        }

        let finalItemInArray = array[(array.length-1)];
        if (finalItemInArray < 0) return 1;
        return finalItemInArray + 1;
    }

    static leftmostPosition(number, largerNumber) {
        let stringLargerNumber = largerNumber.toString();
        return stringLargerNumber.search(number.toString());
    }

    static stringTransformation(string) {
        let regex = /AB|BA|CD|DC/ig;

        while (string.search(regex) !== -1) {
            string = string.replace(regex, '');
        }

        return string;
    }
}