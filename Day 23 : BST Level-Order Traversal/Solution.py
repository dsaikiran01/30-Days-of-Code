class Node:
    def __init__(self,data):
        self.right=self.left=None
        self.data = data

class Solution:
    def insert(self,root,data):
        if root==None:
            return Node(data)
        else:
            if data<=root.data:
                cur=self.insert(root.left,data)
                root.left=cur
            else:
                cur=self.insert(root.right,data)
                root.right=cur
        return root
    
    def levelOrder(self, root):
        queue = [root]
        
        while len(queue) != 0:
            front = queue[0]
            queue.pop(0)
            print(front.data, end = ' ')
            if front.left != None:
                queue.append(front.left)
            if front.right != None:
                queue.append(front.right)

if __name__ == "__main__" :
    T=int(input())
    myTree=Solution()
    root=None
    for i in range(T):
        data=int(input())
        root=myTree.insert(root,data)
    myTree.levelOrder(root)
