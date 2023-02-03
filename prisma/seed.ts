import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

    await prisma.score.createMany({
        data: [
          { name: "John", score: 44, accuracy: 80, quiz: "capitals" },
          { name: "Xandr", score: 50, accuracy: 81, quiz: "flags"  },
          { name: "Blox", score: 28, accuracy: 65, quiz: "timezones"  },
          { name: "Xandr", score: 24, accuracy: 58, quiz: "area"  },
          { name: "John", score: 17, accuracy: 40, quiz: "population"  },
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