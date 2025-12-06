import { prisma } from "config/client"
const innitDatabase = async () => {
  const countUser = await prisma.user.count()
  const countRole = await prisma.role.count()
  if (countUser === 0) {
    await prisma.user.createMany({
      data: [
        {
          fullName: "user1@gmail.com",
          password: "123456",
          accountType: "system",
        },
        {
          fullName: "admin@gmail.com",
          password: "123456",
          accountType: "admin",
        },
      ],
    })
  } else if (countRole === 0) {
    await prisma.role.createMany({
      data: [
        {
          Role: "ADMIN",
          description: "Administrator with full access",
        },
        {
          Role: "USER",
          description: "Standard user",
        },
      ],
    })
  } else {
    console.log("Database has been seeded")
  }
}
export default innitDatabase
