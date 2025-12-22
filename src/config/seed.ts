import { prisma } from "config/client"
import { hashPassword } from "services/user.service"
import { ACCOUNT_TYPE } from "config/constant"

const innitDatabase = async () => {
  const countUser = await prisma.user.count()
  const countRole = await prisma.role.count()
  if (countRole === 0) {
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
  } else if (countUser === 0) {
    const defaultPassword = await hashPassword("123456")
    const adminRole = await prisma.role.findFirst({
      where: { name: "ADMIN" },
    })
    if (adminRole) {
      await prisma.user.createMany({
        data: [
          {
            fullName: "User One",
            username: "user1@gmail.com",
            password: defaultPassword,
            accountType: ACCOUNT_TYPE.SYSTEM,
            roleId: adminRole.id,
          },
          {
            fullName: "Admin User",
            username: "admin@gmail.com",
            password: defaultPassword,
            accountType: ACCOUNT_TYPE.SYSTEM,
            roleId: adminRole.id,
          },
        ],
      })
  } else {
    console.log("Database has been seeded")
  }
}
export default innitDatabase
