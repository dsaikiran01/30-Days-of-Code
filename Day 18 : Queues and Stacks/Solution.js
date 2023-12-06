class Solution {
        constructor() {
                this.stack = [];
                this.queue = [];
        }

        pushCharacter = (ch) => {
                this.stack.push(ch);
        };

        enqueueCharacter = (ch) => {
                this.queue.push(ch);
        };

        popCharacter = () => {
                return this.stack.pop();
        };

        dequeueCharacter = () => {
                return this.queue.shift();
        }
}

function main() {
        var s = readLine();
        var len = s.length;
        var obj = new Solution();
        for (var i = 0; i < len; i++) {
                obj.pushCharacter(s.charAt(i));
                obj.enqueueCharacter(s.charAt(i));
        }

        var isPalindrome = true;

        for (var i = 0; i < len / 2; i++) {
                if (obj.popCharacter() != obj.dequeueCharacter()) {
                        isPalindrome = false;
                        break;
                }
        }

        if (isPalindrome)
                console.log("The word, " + s + ", is a palindrome.");
        else
                console.log("The word, " + s + ", is not a palindrome.");
}

main();
