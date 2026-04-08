import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import type { AcademicRequirement } from './AcademicRequirement.entity.js';
import type { Scholarship } from './Scholarship.entity.js';
import type { ApplicationFiling } from './ApplicationFiling.entity.js';


@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 500 })
  title!: string;

  @Column({ type: 'varchar', length: 255 })
  university!: string;

  @Column({ type: 'varchar', length: 255 })
  location!: string;

  @Column({ type: 'text', nullable: true })
  logo!: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  application_fee!: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  tuition_fee!: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  duration!: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  turnaround!: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  intake!: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  qs_rating!: string;

  @Column({ type: 'jsonb', default: () => "'[]'" })
  tags!: string[];

  @Column({ type: 'text', nullable: true })
  cover_image!: string;

  @Column({ type: 'text', nullable: true })
  website!: string;

  @Column({ type: 'jsonb', default: () => "'[]'" })
  features!: string[];

  @Column({ type: 'text', nullable: true })
  overview!: string;

  @OneToMany('Scholarship', 'course', { cascade: true })
  scholarships!: Scholarship[];

  @OneToMany('AcademicRequirement', 'course', { cascade: true })
  academicRequirements!: AcademicRequirement[];

  @OneToMany('ApplicationFiling', 'course', { cascade: true })
  applicationFilings!: ApplicationFiling[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
