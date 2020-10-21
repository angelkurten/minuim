import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TaskPlaceEntity } from './task-place.entity';

@Entity('task')
export class TaskEntity {
    @PrimaryGeneratedColumn()
    id!:number

    @OneToMany(type => TaskPlaceEntity, taskPlaces => taskPlaces.task)
    taskPlaces!: TaskPlaceEntity[]
}