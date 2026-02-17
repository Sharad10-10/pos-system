import { pgTable, serial, varchar, timestamp, numeric, text} from "drizzle-orm/pg-core";

export const userSchema = pgTable('users', {
    id:serial('id').primaryKey(),
    userName:varchar('userName').notNull().unique(),
    password:varchar('password',{length:255}).notNull(),
    created_at:timestamp('createdAt').defaultNow(),  
})


export const pizzaSchema = pgTable("pizza", {
  id: serial("id").primaryKey(),
  pizzaName: varchar("name", { length: 255 }).notNull(),
  imageUrl: varchar("image_url").notNull(),
  smallPrice: varchar("price_small", { precision: 10, scale: 2 }).notNull(),
  mediumPrice: varchar("price_medium", { precision: 10, scale: 2 }).notNull(),
  largePrice: varchar("price_large", { precision: 10, scale: 2 }).notNull(),
});


export const customerDataSchema = pgTable('customerdata', {
  id: serial('id').primaryKey(),
  customerName: varchar('customer_name'),
  phoneNumber: varchar('phone_number'),
  order: text('customer_order').array().notNull(),
  totalPrice: varchar('total_price', {precision: 10, scale: 2}).notNull()

})

