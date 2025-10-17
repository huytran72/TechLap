import { prisma } from "config/client"
const innitDatabase = async () => {
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
