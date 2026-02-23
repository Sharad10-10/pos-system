-- ALTER TABLE "users" ALTER COLUMN "user_role" DROP NOT NULL;
ALTER TABLE "users" ADD COLUMN "user_role" varchar(255);