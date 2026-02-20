CREATE TABLE "drinks" (
	"id" serial PRIMARY KEY NOT NULL,
	"image_url" varchar NOT NULL,
	"drinks_name" varchar NOT NULL,
	"510ml_price" varchar NOT NULL,
	"2l_price" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE "sides" (
	"id" serial PRIMARY KEY NOT NULL,
	"item_name" varchar NOT NULL,
	"image_url" varchar NOT NULL,
	"small_price" varchar,
	"regular_price" varchar,
	"large_price" varchar
);
--> statement-breakpoint
-- ALTER TABLE "customerdata" ALTER COLUMN "phone_number" SET DATA TYPE varchar(10);