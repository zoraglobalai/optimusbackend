import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Course } from './Course.entity.js';

@Entity('scholarships')
export class Scholarship {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 500 })
  name!: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  type!: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  intake!: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  amount!: string;

  @Column({ type: 'varchar', length: 255, nullable: true, default: '' })
  deadline!: string;

  @ManyToOne(() => Course, (course) => course.scholarships, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'course_id' })
  course!: Course;

  @CreateDateColumn()
  createdAt!: Date;
}
