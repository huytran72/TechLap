import { getConnection } from "config/database"
import { prisma } from "config/client"

const handleCreateUser = async (
  name: string,
  email: string,
  address: string
) => {
  await prisma.user.create({
    data: {
      name: name,
      email: email,
      address: address,
    },
  })
}

const getAllUsers = async () => {
  const users = await prisma.user.findMany()
  return users
}

const handleDeleteUser = async (id: string) => {
  try {
    const connection = await getConnection()
    const sql = "DELETE FROM `users` WHERE `id` = ?"
    const values = [id]

    const [result, fields] = await connection.execute(sql, values)

    return result
  } catch (err) {
    console.log(err)
    return []
  }
}

const getUserById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  })
  return user
}

const updateUserById = async (
  id: string,
  email: string,
  address: string,
  name: string
) => {
  const updatedUser = await prisma.user.update({
    where: { id: Number(id) },
    data: {
      email: email,
      address: address,
      name: name,
    },
  })
  return updatedUser
}

export {
  handleCreateUser,
  getAllUsers,
  handleDeleteUser,
  getUserById,
  updateUserById,
}
