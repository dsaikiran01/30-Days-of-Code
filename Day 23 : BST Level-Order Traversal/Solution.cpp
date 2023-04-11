#include <iostream>
using namespace std;

class Node
{
    public:
        int data;
        Node *left,*right;
        Node(int d)
        {
            data=d;
            left=right=NULL;
        }
};

class Solution
{
    public:
  		Node* insert(Node* root, int data)
        {
            if(root==NULL)
            {
                return new Node(data);
            }
            else
            {
                Node* cur;
                if(data<=root->data)
                {
                    cur=insert(root->left,data);
                    root->left=cur;
                }
                else
                {
                   cur=insert(root->right,data);
                   root->right=cur;
                }           
           return root;
           }
        }
    
    int height(Node* root)
    {
        if(root == NULL)
        {
            return 0;
        }
        else
        {
            int rtree = height(root -> right);
            int ltree = height(root -> left);
            
            if(rtree > ltree)
                return (rtree + 1);
            else
                return (ltree+1);
        }
    }
    
    void currentLevel(Node* root, int i)
    {
        if(root == NULL)
            return;
        else if(i == 1)
            cout << root -> data << " ";
        else if(i > 1)
        {
            currentLevel(root -> left, i -1);
            currentLevel(root -> right, i - 1);
        }
    }
    
	void levelOrder(Node * root)
    {
      int h = height(root);
      
      for(int i = 0; i <= h; i++)
      {
        currentLevel(root, i);
      }
	}
};

int main()
{
    Solution myTree;
    Node* root=NULL;
    int T,data;
    cin>>T;
    while(T-- > 0)
    {
        cin>>data;
        root= myTree.insert(root,data);
    }
    myTree.levelOrder(root);
    return 0;
}
