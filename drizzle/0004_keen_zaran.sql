CREATE TABLE "customerdata" (
	"id" serial PRIMARY KEY NOT NULL,
	"customer_name" varchar,
	"phone_number" varchar,
	"customer_order" text[] NOT NULL,
	"total_price" varchar NOT NULL
);
