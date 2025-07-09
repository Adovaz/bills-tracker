import { defineAction } from "astro:actions";
import { db, eq, payment, bill } from "astro:db";
import { date, z } from "astro:schema";

export const server = {
  addPayment: defineAction({
    input: z.number(),
    handler: async (billId) => {
      const [newRow] = await db
        .insert(payment)
        .values({ billId: billId, name: "Name", cost: 0, isPaid: false })
        .returning();
      return newRow;
    },
  }),

  addBill: defineAction({
    handler: async () => {
      const [newRow] = await db
        .insert(bill)
        .values({ due: new Date(), cost: 0, isOpen: true })
        .returning();
      return newRow;
    },
  }),

  saveBill: defineAction({
    input: z.object({
      id: z.number(),
      due: z.coerce.date(),
      cost: z.number(),
      isOpen: z.boolean(),
    }),
    handler: async ({ id, due, cost, isOpen }) => {
      await db.update(bill).set({ due: due, cost: cost, isOpen: isOpen }).where(eq(bill.id, id));
      console.log("bill saved")
    },
  }),

  savePayment: defineAction({
    input: z.object({
      id: z.number(),
      billId: z.number(),
      name: z.string(),
      cost: z.number(),
      isPaid: z.boolean(),
    }),
    handler: async ({ id, name, cost, isPaid }) => {
      await db
        .update(payment)
        .set({ name, cost, isPaid })
        .where(eq(payment.id, id));
    },
  }),

  updateBillStatus: defineAction({
    input: z.object({ id: z.number(), isOpen: z.boolean() }),
    handler: async ({ id, isOpen }) => {
      await db.update(bill).set({ isOpen }).where(eq(bill.id, id));
    },
  }),

  deleteBill: defineAction({
    input: z.number(),
    handler: async (id) => {
      await db.delete(payment).where(eq(payment.billId, id));
      await db.delete(bill).where(eq(bill.id, id));
    },
  }),
  deletePayment: defineAction({
    input: z.number(),
    handler: async (id) => {
      await db.delete(payment).where(eq(payment.id, id));
    },
  }),
};
