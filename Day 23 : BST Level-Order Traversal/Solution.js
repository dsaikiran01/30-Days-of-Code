function Node(data) {
        this.data = data;
        this.left = null;
        this.right = null;
};

function BinarySearchTree() {
        this.insert = function (root, data) {
                if (root === null) {
                        this.root = new Node(data);
                        return this.root;
                }

                if (data <= root.data) {
                        if (root.left) {
                                this.insert(root.left, data);
                        } else {
                                root.left = new Node(data);
                        }
                } else {
                        if (root.right) {
                                this.insert(root.right, data);
                        } else {
                                root.right = new Node(data);
                        }
                }

                return this.root;
        };

        this.levelOrder = function (root) {
                var queue = [root];

                while (queue.length > 0) {
                        var ele = queue.shift();
                        process.stdout.write(ele.data + " ");
                        if (ele.left != null) {
                                queue.push(ele.left);
                        }
                        if (ele.right != null) {
                                queue.push(ele.right);
                        }
                }

        };
};

function main() {
        var tree = new BinarySearchTree();
        var root = null;

        var values = input.split('\n').map(Number);

        for (var i = 1; i < values.length; i++) {
                root = tree.insert(root, values[i]);
        }

        tree.levelOrder(root);
};

main();
