CREATE TABLE "pizza" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"price_small" numeric(10, 2) NOT NULL,
	"price_medium" numeric(10, 2) NOT NULL,
	"price_large" numeric(10, 2) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "password" SET DATA TYPE varchar(255);