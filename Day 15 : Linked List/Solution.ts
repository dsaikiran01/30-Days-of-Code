class MyNode {
    data: number
    next: MyNode | null

    constructor(data: number, next: MyNode | null) {
        this.data = data;
        this.next = next;
    }
}

class Solution {
    insert(head: MyNode | null, data: number): MyNode | null {
        let node = new MyNode(data, null);
        node.data = data;

        if (head == null) {
            head = node;
        } else {
            let current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }

        return head;
    }

    display(head: MyNode | null): void {
        let start = head;
        while (start) {
            process.stdout.write(start.data + " ");
            start = start.next;
        }
    }
}

function main() {
    const T: number = +readLine();
    let head = null;
    let mylist = new Solution();
    for (let i: number = 0; i < T; i++) {
        let data: number = +readLine();
        head = mylist.insert(head, data);
    }
    mylist.display(head);
}