import { prisma } from "config/client"
const innitDatabase = async () => {
  await prisma.user.createMany({
    data: [
      {
        username: "user1",
        password: "123456",
        accountType: "system",
      },
      {
        username: "admin",
        password: "adminpassword",
        accountType: "admin",
      },
    ],
  })
}
export default innitDatabase
