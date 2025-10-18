import { prisma } from "config/client"
const innitDatabase = async () => {
  const countUser = await prisma.user.count()
  if (countUser > 0) {
    return
  }
  await prisma.user.createMany({
    data: [
      {
        username: "user1@gmail.com",
        password: "123456",
        accountType: "system",
      },
      {
        username: "admin@gmail.com",
        password: "123456",
        accountType: "admin",
      },
    ],
  })
}
export default innitDatabase
