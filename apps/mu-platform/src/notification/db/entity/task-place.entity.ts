import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TaskEntity } from './task.entity';

@Entity('task_places')
export class TaskPlaceEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(type => TaskEntity, task => task.taskPlaces)
    task!: TaskEntity
}