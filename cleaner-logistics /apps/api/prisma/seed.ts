import { PrismaClient, Role, WorkerMode, TaskType } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('password123', 10);

  // 1. City
  const city = await prisma.city.create({
    data: {
      name: 'London',
      country: 'UK',
      currency: 'GBP',
      symbol: '£',
      lat: 51.5074,
      lng: -0.1278,
      radius: 10000,
    },
  });

  // 2. Users
  const admin = await prisma.user.create({
    data: { email: 'admin@test.com', password, role: Role.ADMIN },
  });
  const owner = await prisma.user.create({
    data: { email: 'owner@test.com', password, role: Role.OWNER },
  });
  const hoster = await prisma.user.create({
    data: { email: 'hoster@test.com', password, role: Role.HOSTER },
  });
  const cleaner = await prisma.user.create({
    data: { email: 'cleaner@test.com', password, role: Role.WORKER, mode: WorkerMode.CLEANER },
  });
  const motoboy = await prisma.user.create({
    data: { email: 'motoboy@test.com', password, role: Role.WORKER, mode: WorkerMode.MOTOBOY },
  });

  // 3. Property
  const property = await prisma.property.create({
    data: {
      name: 'Luxury Flat Shoreditch',
      address: '123 Tech Lane, London',
      lat: 51.5245,
      lng: -0.0848,
      ownerId: owner.id,
      cityId: city.id,
      insideInstructions: 'Keybox behind the blue pot',
      accessCode: '1234',
      bedsConfig: { double: 2, single: 1 },
      consumables: { coffee: true, towels: 4 },
    },
  });

  // 4. Bag
  const bag = await prisma.bag.create({
    data: { qrCode: 'BAG-001' },
  });

  // 5. Order
  const order = await prisma.order.create({
    data: {
      propertyId: property.id,
      availableAt: new Date(Date.now() + 86400000), // Tomorrow
      currency: 'GBP',
      bagId: bag.id,
      tasks: {
        create: [
          { type: TaskType.BAG_DELIVERY },
          { type: TaskType.CLEANING },
          { type: TaskType.BAG_RETURN },
        ],
      },
    },
  });

  console.log('Seed completed successfully');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
