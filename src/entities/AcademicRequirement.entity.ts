import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Course } from './Course.entity.js';

export interface RequirementDetail {
  label: string;
  value: string;
}

@Entity('academic_requirements')
export class AcademicRequirement {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 255 })
  type!: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  score!: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  out_of!: string;

  @Column({ type: 'jsonb', default: () => "'[]'" })
  details!: RequirementDetail[];

  @ManyToOne(() => Course, (course) => course.academicRequirements, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'course_id' })
  course!: Course;

  @CreateDateColumn()
  createdAt!: Date;
}
