import { pgTable, serial, varchar, timestamp, text} from "drizzle-orm/pg-core";

export const userSchema = pgTable('users', {
    id:serial('id').primaryKey(),
    userName:varchar('userName').notNull().unique(),
    password:varchar('password',{length:255}).notNull(),
    created_at:timestamp('createdAt').defaultNow(),
    userRole: varchar('user_role', {length: 255})
})


export const pizzaSchema = pgTable("pizza", {
  id: serial("id").primaryKey(),
  pizzaName: varchar("name", { length: 255 }).notNull(),
  imageUrl: varchar("image_url").notNull(),
  smallPrice: varchar("price_small", { precision: 10, scale: 2 }).notNull(),
  mediumPrice: varchar("price_medium", { precision: 10, scale: 2 }).notNull(),
  largePrice: varchar("price_large", { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp('created_at').defaultNow()
});

export const sidesSchema = pgTable('sides', {
  id: serial('id').primaryKey(),
  sidesName: varchar('item_name').notNull(),
  imageUrl: varchar('image_url').notNull(),
  smallPrice: varchar('small_price', { precision: 10, scale: 2 }),
  regularPrice: varchar('regular_price', { precision: 10, scale: 2 }),
  largePrice: varchar('large_price', { precision: 10, scale: 2 }),
  createdAt: timestamp('created_at').defaultNow()
})

export const drinksSchema = pgTable('drinks', {
  id: serial('id').primaryKey(),
  imageUrl: varchar('image_url').notNull(),
  drinksName: varchar('drinks_name', { precision: 10, scale: 2 }).notNull(),
  smallPrice: varchar('510ml_price', { precision: 10, scale: 2 }).notNull(),
  largePrice: varchar('2l_price', { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp('created_at').defaultNow()
})


export const customerDataSchema = pgTable('customerdata', {
  id: serial('id').primaryKey(),
  customerName: varchar('customer_name'),
  phoneNumber: varchar('phone_number'),
  order: text('customer_order').array().notNull(),
  totalPrice: varchar('total_price', {precision: 10, scale: 2}).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  orderStatus: varchar('order_status').default('Pending'),
  paymentStatus: varchar('payment_status').default('Not paid')
})

