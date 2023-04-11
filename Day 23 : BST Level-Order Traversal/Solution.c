#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    struct Node* left;
    struct Node* right;
    int data;
}Node;

Node* newNode(int data)
{
    Node* node=(Node*)malloc(sizeof(Node));
    node->left=node->right=NULL;
    node->data=data;
    return node;
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
        
        return (rtree > ltree ? rtree+1 : ltree+1);
    }
}

void printCurrLevel(Node* root, int level)
{
    if(root == NULL)
        return;
    else if(level == 1)
    {
        printf("%d ", root -> data); 
    }
    else
    {
        printCurrLevel(root -> left, level - 1);
        printCurrLevel(root -> right, level - 1);
    }
}

void levelOrder(Node* root)
{
  int i, h = height(root);
  for(i = 0; i <= h; i++)
  {
      printCurrLevel(root, i);
  }
}

Node* insert(Node* root,int data)
{
    if(root==NULL)
        return newNode(data);
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
        
    }
    return root;
}

int main()
{
    Node* root=NULL;
    int T,data;
    scanf("%d",&T);
    while(T-->0)
    {
        scanf("%d",&data);
        root=insert(root,data);
    }
    levelOrder(root);
    return 0;
}
