class MyNode {
    data: number
    left: MyNode | null
    right: MyNode | null

    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
};

class BinarySearchTree {
    root: MyNode | null = null

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

        return this.root;
    };

    levelOrder(root: MyNode | null): void {
        let queue = [root];

        while (queue.length > 0) {
            let ele: MyNode = queue.shift();
            process.stdout.write(ele.data + " ");
            if (ele.left != null) {
                queue.push(ele.left);
            }
            if (ele.right != null) {
                queue.push(ele.right);
            }
        }
    };
}

function main() {
    const tree: BinarySearchTree = new BinarySearchTree();
    let root: MyNode | null = null;

    const n: number = +readLine();
    let valStr: string = "";
    for (let i: number = 0; i < n - 1; i++) {
        valStr += readLine() + " ";
    }
    valStr += readLine();

    const values: number[] = valStr.split(' ').map(Number);

    for (let i: number = 0; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }

    tree.levelOrder(root);
}