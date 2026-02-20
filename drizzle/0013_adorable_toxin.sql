ALTER TABLE "customerdata" ADD COLUMN "order_status" varchar DEFAULT 'Pending';--> statement-breakpoint
ALTER TABLE "customerdata" ADD COLUMN "payment_status" varchar DEFAULT 'Not paid';