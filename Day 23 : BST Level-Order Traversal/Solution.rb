class Node
  attr_accessor :left,:right,:data
  def initialize data
    @left=@right=nil
    @data=data
  end
end

class Solution
  def insert (root,data)
    if root==nil
      return Node.new(data)
    else
      if data<=root.data
          cur=self.insert(root.left,data)
          root.left=cur
      else
          cur=self.insert(root.right,data)
          root.right=cur
      end
    end
    return root
  end

  def levelOrder(root)
    queue = [root]
    while queue.length > 0
      ele = queue.shift
      print "#{ele.data} "
      
      if ele.left != nil
          queue.push ele.left
      end
      if ele.right != nil
          queue.push ele.right
      end
    end
  end
end

myTree = Solution.new
root = nil
T = gets.to_i
for i in 1..T
  data = gets.to_i
  root = myTree.insert(root,data)
end
myTree.levelOrder(root)
