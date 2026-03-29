import { MigrationInterface, QueryRunner } from "typeorm";

export class AutoMigration1772529560216 implements MigrationInterface {
    name = 'AutoMigration1772529560216'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('USER', 'ADMIN')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "role" "public"."users_role_enum" NOT NULL DEFAULT 'USER', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_97672ac88f789774dd47f7c8be" ON "users" ("email") `);
        await queryRunner.query(`CREATE TABLE "academic_requirements" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying(255) NOT NULL, "score" character varying(50), "out_of" character varying(100), "details" jsonb NOT NULL DEFAULT '[]', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "course_id" uuid, CONSTRAINT "PK_c4cc9d1767eb2ee8642b66138ce" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "scholarships" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(500) NOT NULL, "type" character varying(100), "intake" character varying(255), "amount" character varying(100), "deadline" character varying(255) DEFAULT '', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "course_id" uuid, CONSTRAINT "PK_2a0dde777a7801b91882e4e69e9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "application_filings" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "label" character varying(255) NOT NULL, "value" jsonb NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "course_id" uuid, CONSTRAINT "PK_1e9310af42f164fcfc42a743091" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "courses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(500) NOT NULL, "university" character varying(255) NOT NULL, "location" character varying(255) NOT NULL, "logo" text, "application_fee" character varying(100), "tuition_fee" character varying(100), "duration" character varying(100), "turnaround" character varying(100), "intake" character varying(500), "qs_rating" character varying(100), "tags" jsonb NOT NULL DEFAULT '[]', "cover_image" text, "website" text, "features" jsonb NOT NULL DEFAULT '[]', "overview" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3f70a487cc718ad8eda4e6d58c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "academic_requirements" ADD CONSTRAINT "FK_ef652eb7678f3cff7c67efa13e3" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "scholarships" ADD CONSTRAINT "FK_2c879401edbf573f591ec5e1938" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "application_filings" ADD CONSTRAINT "FK_d6080800fcd932927e06a4096c6" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "application_filings" DROP CONSTRAINT "FK_d6080800fcd932927e06a4096c6"`);
        await queryRunner.query(`ALTER TABLE "scholarships" DROP CONSTRAINT "FK_2c879401edbf573f591ec5e1938"`);
        await queryRunner.query(`ALTER TABLE "academic_requirements" DROP CONSTRAINT "FK_ef652eb7678f3cff7c67efa13e3"`);
        await queryRunner.query(`DROP TABLE "courses"`);
        await queryRunner.query(`DROP TABLE "application_filings"`);
        await queryRunner.query(`DROP TABLE "scholarships"`);
        await queryRunner.query(`DROP TABLE "academic_requirements"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_97672ac88f789774dd47f7c8be"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
    }

}
