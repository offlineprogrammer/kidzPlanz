import { Task } from './task';

export interface Plan {
  id: string;
  name: string;
  date: Date;
  taskz: Task[]
 }
