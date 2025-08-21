export interface SortedResult {
  id: string;
  url: string;
  type: 'page' | 'heading' | 'text';
  content: string;
}
