class MyNode {
    data: number
    left: MyNode | null
    right: MyNode | null

    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    root: MyNode | null = null;

    insert(root: MyNode | null, data: number): MyNode | null {
        if (root === null) {
            const newNode = new MyNode(data);
            if (this.root === null) {
                this.root = newNode;
            }
            return newNode;
        }

        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new MyNode(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new MyNode(data);
            }
        }

        return root;
    }

    getHeight(root: MyNode | null): number {
        if (root === null) {
            return -1;
        }
        return 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
    }
}

function main() {
    const tree: BinarySearchTree = new BinarySearchTree();
    let root: MyNode | null = null;

    const n: number = +readLine();
    let valStr: string = "";
    for (let i: number = 0; i < n; i++) {
        valStr += readLine() + " ";
    }
    const values = valStr.split(' ').map(Number);

    for (let i: number = 0; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }

    console.log(tree.getHeight(root));
}