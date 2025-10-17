const innitDatabase = async () => {
  await prisma.user.createMany({
    data: [
      {
        username: "user1",
        password: "password1",
        accountType: "user",
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
