import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {

    await prisma.quiz.createMany({
        data: [
          { name: 'City' },
          { name: 'Flag' }, 
          { name: 'Currency'  },
          { name: 'Language' },
          { name: 'Population' },
        ],
      })

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