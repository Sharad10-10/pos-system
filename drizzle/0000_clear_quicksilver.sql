CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"userName" varchar NOT NULL,
	"password" varchar NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	CONSTRAINT "users_userName_unique" UNIQUE("userName")
);
