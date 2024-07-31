import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const bob = await prisma.user.upsert({
    where: {email: 'bob@gmail.com'},
    update: {},
    create: {
      email: 'bob@gmail.com',
      hashedPassword: 'password',
      tasks: {
        create: [
          {
            name: 'Work',
            completed: false,
          },
          {
            name: 'Homework',
            completed: false,
          },
        ]
      }
    }
  });
  
  const alice = await prisma.user.upsert({
    where: { email: 'alice@gmail.com'},
    update: {},
    create: {
      email: 'alice@gmail.com',
      hashedPassword: 'password',
      tasks: {
        create: [
          {
            name: 'School',
            completed: false,
          },
          {
            name: 'Club',
            completed: false,
          }
        ]
      }
    }
  });

  console.log({alice, bob});
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })