class MyNode {
    data: number
    next: MyNode | null

    constructor(data: number, next: MyNode | null) {
        this.data = data;
        this.next = next;
    }
}

class Solution {
    removeDuplicates(head: MyNode | null): MyNode | null {
        if (head == null) {
            return head;
        } else {
            let root: MyNode = head;
            while (root.next) {
                if (root.data == root.next.data) {
                    root.next = root.next.next;
                } else {
                    root = root.next;
                }
            }
        }

        return head;
    }

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
        let start: MyNode | null = head;
        while (start) {
            process.stdout.write(start.data + " ");
            start = start.next;
        }
    }
}

function main() {
    const T: number = +readLine();
    let head: MyNode | null = null;
    let mylist: Solution = new Solution();
    for (let i: number = 0; i < T; i++) {
        let data: number = +readLine();
        head = mylist.insert(head, data);
    }
    head = mylist.removeDuplicates(head);
    mylist.display(head);
}