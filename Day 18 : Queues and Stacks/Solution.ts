class Solution {
    stack: string[] = new Array();
    queue: string[] = new Array();
    top: number = 0;
    front: number = 0;
    end: number = 0;

    pushCharacter(ch: string): void {
        this.stack[this.top++] = ch;
    }

    enqueueCharacter(ch: string): void {
        this.queue[this.end++] = ch;
    }

    popCharacter(): string {
        return this.stack[--this.top];
    }

    dequeueCharacter(): string {
        return this.queue[this.front++];
    }
}

function main() {
    let s: string = readLine();
    let len: number = s.length;
    let obj: Solution = new Solution();
    let isPalindrome: boolean = true;

    for (let i: number = 0; i < len; i++) {
        obj.pushCharacter(s.charAt(i));
        obj.enqueueCharacter(s.charAt(i));
    }

    for (let i: number = 0; i < len / 2; i++) {
        if (obj.popCharacter() != obj.dequeueCharacter()) {
            isPalindrome = false;
            break;
        }
    }

    if (isPalindrome) {
        console.log("The word, " + s + ", is a palindrome.");
    } else {
        console.log("The word, " + s + ", is not a palindrome.");
    }
}