import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Course } from './Course.entity.js';

export interface EnglishExamSubScore {
  label: string;
  value: string;
}

export interface EnglishExam {
  exam_name: string;
  overall_score: string;
  overall_label: string;
  sub_scores: EnglishExamSubScore[];
}

export interface EnglishExamRequirements {
  exam_waiver: string;
  moi_accepted: string;
  waiver_note: string;
  exams: EnglishExam[];
}

@Entity('application_filings')
export class ApplicationFiling {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 255 })
  label!: string;

  /**
   * Can be a plain string (e.g. "Jan, Mar, May, Jul, Sep, Nov") or a
   * structured object (e.g. EnglishExamRequirements).
   * Stored as JSONB so both cases are handled transparently.
   */
  @Column({ type: 'jsonb' })
  value!: string | EnglishExamRequirements;

  @ManyToOne(() => Course, (course) => course.applicationFilings, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'course_id' })
  course!: Course;

  @CreateDateColumn()
  createdAt!: Date;
}
