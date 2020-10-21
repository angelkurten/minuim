/**
 * User Repository Interface
 */
export interface TaskRepository {
    findById(taskId: number): Promise<Task|boolean>;
}

export interface Task {
    id: number;
}

export interface TaskPlaces {
    id:number
}