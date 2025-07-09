import { db, bill, payment} from 'astro:db';

export default async function() {
  await db.insert(bill).values([
    { due: new Date(2003, 11, 29), cost: 120, isOpen: true},
    { due: new Date(2003, 11, 29), cost: 120, isOpen: true},
    { due: new Date(2003, 11, 29), cost: 120, isOpen: true},
    { due: new Date(2003, 11, 29), cost: 120, isOpen: false},
  ]);

  await db.insert(payment).values([
    { billId: 1, name: "Avery", cost: 120, isPaid: false},
    { billId: 1, name: "Cosmo", cost: 120, isPaid: false},
    { billId: 1, name: "Pamela", cost: 120, isPaid: true},
    { billId: 1, name: "Ella", cost: 120, isPaid: false},
    { billId: 1, name: "Bailey", cost: 120, isPaid: false},
    { billId: 2, name: "Avery", cost: 120, isPaid: false},
    { billId: 2, name: "Cosmo", cost: 120, isPaid: false},
    { billId: 2, name: "Pamela", cost: 120, isPaid: true},
    { billId: 2, name: "Ella", cost: 120, isPaid: false},
    { billId: 2, name: "Bailey", cost: 120, isPaid: false},
    { billId: 3, name: "Avery", cost: 120, isPaid: false},
    { billId: 3, name: "Cosmo", cost: 120, isPaid: false},
    { billId: 3, name: "Pamela", cost: 120, isPaid: false},
    { billId: 3, name: "Ella", cost: 120, isPaid: false},
    { billId: 3, name: "Bailey", cost: 120, isPaid: false},
    { billId: 4, name: "Avery", cost: 120, isPaid: true},
    { billId: 4, name: "Cosmo", cost: 120, isPaid: true},
    { billId: 4, name: "Pamela", cost: 120, isPaid: true},
    { billId: 4, name: "Ella", cost: 120, isPaid: false},
    { billId: 4, name: "Bailey", cost: 120, isPaid: false},
  ]);
}
