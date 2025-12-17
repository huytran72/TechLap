import { prisma } from "config/client"
import { hashPassword } from "services/user.service"
import { ACCOUNT_TYPE } from "config/constant"

const innitDatabase = async () => {
  const countUser = await prisma.user.count()
  const countRole = await prisma.role.count()
  if (countUser === 0) {
    const defaultPassword = await hashPassword("123456")

    await prisma.user.createMany({
      data: [
        {
          fullName: "User One",
          username: "user1@gmail.com",
          password: defaultPassword,
          accountType: ACCOUNT_TYPE.SYSTEM,
        },
        {
          username: "admin@gmail.com",
          password: defaultPassword,
          accountType: ACCOUNT_TYPE.SYSTEM,
        },
      ],
    })
  } else if (countRole === 0) {
    await prisma.role.createMany({
      data: [
        {
          name: "ADMIN",
          description: "Administrator with full access",
        },
        {
          name: "USER",
          description: "Standard user",
        },
      ],
    })
  } else {
    console.log("Database has been seeded")
  }
}
export default innitDatabase
