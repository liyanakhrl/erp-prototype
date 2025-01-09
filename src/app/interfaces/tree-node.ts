// Define the type for the tree data
export interface TreeNode {
  name: string;
  role: string;
  image: string;
  jobDescription: string;
  children?: TreeNode[];
  depth: number;
  parent?: TreeNode; // Optional because the root node has no parent
}
