import { MigrationInterface, QueryRunner } from "typeorm";

export class AutoMigration1772529560216 implements MigrationInterface {
    name = 'AutoMigration1772529560216'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

        await queryRunner.query(`
            DO $$
            BEGIN
              IF NOT EXISTS (
                SELECT 1
                FROM pg_type t
                JOIN pg_namespace n ON n.oid = t.typnamespace
                WHERE t.typname = 'users_role_enum'
                  AND n.nspname = 'public'
              ) THEN
                CREATE TYPE "public"."users_role_enum" AS ENUM('USER', 'ADMIN');
              END IF;
            END
            $$;
        `);

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "users" (
              "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
              "name" character varying(255) NOT NULL,
              "email" character varying(255) NOT NULL,
              "password" character varying(255) NOT NULL,
              "role" "public"."users_role_enum" NOT NULL DEFAULT 'USER',
              "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
              "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
              CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
            )
        `);

        await queryRunner.query(`CREATE UNIQUE INDEX IF NOT EXISTS "IDX_97672ac88f789774dd47f7c8be" ON "users" ("email")`);

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "academic_requirements" (
              "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
              "type" character varying(255) NOT NULL,
              "score" character varying(50),
              "out_of" character varying(100),
              "details" jsonb NOT NULL DEFAULT '[]',
              "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
              "course_id" uuid,
              CONSTRAINT "PK_c4cc9d1767eb2ee8642b66138ce" PRIMARY KEY ("id")
            )
        `);

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "scholarships" (
              "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
              "name" character varying(500) NOT NULL,
              "type" character varying(100),
              "intake" character varying(255),
              "amount" character varying(100),
              "deadline" character varying(255) DEFAULT '',
              "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
              "course_id" uuid,
              CONSTRAINT "PK_2a0dde777a7801b91882e4e69e9" PRIMARY KEY ("id")
            )
        `);

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "application_filings" (
              "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
              "label" character varying(255) NOT NULL,
              "value" jsonb NOT NULL,
              "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
              "course_id" uuid,
              CONSTRAINT "PK_1e9310af42f164fcfc42a743091" PRIMARY KEY ("id")
            )
        `);

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "courses" (
              "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
              "title" character varying(500) NOT NULL,
              "university" character varying(255) NOT NULL,
              "location" character varying(255) NOT NULL,
              "logo" text,
              "application_fee" character varying(100),
              "tuition_fee" character varying(100),
              "duration" character varying(100),
              "turnaround" character varying(100),
              "intake" character varying(500),
              "qs_rating" character varying(100),
              "tags" jsonb NOT NULL DEFAULT '[]',
              "cover_image" text,
              "website" text,
              "features" jsonb NOT NULL DEFAULT '[]',
              "overview" text,
              "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
              "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
              CONSTRAINT "PK_3f70a487cc718ad8eda4e6d58c9" PRIMARY KEY ("id")
            )
        `);

        await queryRunner.query(`
            DO $$
            BEGIN
              IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema='public' AND table_name='academic_requirements')
                 AND EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema='public' AND table_name='courses')
                 AND NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname='FK_ef652eb7678f3cff7c67efa13e3') THEN
                ALTER TABLE "academic_requirements"
                ADD CONSTRAINT "FK_ef652eb7678f3cff7c67efa13e3"
                FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
              END IF;
            END
            $$;
        `);

        await queryRunner.query(`
            DO $$
            BEGIN
              IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema='public' AND table_name='scholarships')
                 AND EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema='public' AND table_name='courses')
                 AND NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname='FK_2c879401edbf573f591ec5e1938') THEN
                ALTER TABLE "scholarships"
                ADD CONSTRAINT "FK_2c879401edbf573f591ec5e1938"
                FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
              END IF;
            END
            $$;
        `);

        await queryRunner.query(`
            DO $$
            BEGIN
              IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema='public' AND table_name='application_filings')
                 AND EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema='public' AND table_name='courses')
                 AND NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname='FK_d6080800fcd932927e06a4096c6') THEN
                ALTER TABLE "application_filings"
                ADD CONSTRAINT "FK_d6080800fcd932927e06a4096c6"
                FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
              END IF;
            END
            $$;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE IF EXISTS "application_filings" DROP CONSTRAINT IF EXISTS "FK_d6080800fcd932927e06a4096c6"`);
        await queryRunner.query(`ALTER TABLE IF EXISTS "scholarships" DROP CONSTRAINT IF EXISTS "FK_2c879401edbf573f591ec5e1938"`);
        await queryRunner.query(`ALTER TABLE IF EXISTS "academic_requirements" DROP CONSTRAINT IF EXISTS "FK_ef652eb7678f3cff7c67efa13e3"`);
        await queryRunner.query(`DROP TABLE IF EXISTS "courses"`);
        await queryRunner.query(`DROP TABLE IF EXISTS "application_filings"`);
        await queryRunner.query(`DROP TABLE IF EXISTS "scholarships"`);
        await queryRunner.query(`DROP TABLE IF EXISTS "academic_requirements"`);
        await queryRunner.query(`DROP INDEX IF EXISTS "public"."IDX_97672ac88f789774dd47f7c8be"`);
        await queryRunner.query(`DROP TABLE IF EXISTS "users"`);
        await queryRunner.query(`DROP TYPE IF EXISTS "public"."users_role_enum"`);
    }

}
