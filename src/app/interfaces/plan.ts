import { Task } from './task';

export interface Plan {
  id: string;
  name: string;
  photo: string;
  date: Date;
  bComplete: boolean;
  taskz: Task[];
 }
