export interface Todo {
  creationDate: number;
  name: string;
  tags: string[];
  priority: number;
  id?: string;
  doneDate?: number;
}
