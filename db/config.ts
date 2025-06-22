import { defineDb, defineTable, column } from "astro:db";

const bill = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    due: column.date(),
    cost: column.number(),
    isOpen: column.boolean(),
  },
});

const payment = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    billId: column.number(),
    name: column.text(),
    cost: column.number(),
    isPaid: column.boolean(),
  },
  foreignKeys: [
    {
      columns: ["billId"],
      references: () => [bill.columns.id],
    },
  ],
});

// https://astro.build/db/config
export default defineDb({
  tables: { bill, payment },
});
