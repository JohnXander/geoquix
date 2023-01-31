import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

    await prisma.score.createMany({
        data: [
          { name: "John", score: 5, accuracy: 50, quiz: "capitals" },
          { name: "John", score: 4, accuracy: 40, quiz: "flags"  },
          { name: "John", score: 3, accuracy: 30, quiz: "timezones"  },
          { name: "John", score: 2, accuracy: 20, quiz: "area"  },
          { name: "John", score: 1, accuracy: 10, quiz: "population"  },
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