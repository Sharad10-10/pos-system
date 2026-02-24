CREATE TABLE "inventory" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_id" varchar NOT NULL,
	"product_name" varchar(255) NOT NULL,
	"quantity" numeric NOT NULL
);
