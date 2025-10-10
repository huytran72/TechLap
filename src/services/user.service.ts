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
  try {
    const connection = await getConnection()
    const sql = "SELECT * FROM `users` WHERE `id` = ?"
    const values = [id]
    const [result, fields] = await connection.execute(sql, values)
    return result[0]
  } catch (err) {
    console.log(err)
    return []
  }
}

const updateUserById = async (
  id: string,
  email: string,
  address: string,
  name: string
) => {
  try {
    const connection = await getConnection()
    const sql =
      "UPDATE `users` SET `name` = ?, `email` = ?, `address` = ? WHERE `id` = ?"
    const values = [name, email, address, id]
    const [result, fields] = await connection.execute(sql, values)
    return result
  } catch (err) {
    console.log(err)
    return []
  }
}

export {
  handleCreateUser,
  getAllUsers,
  handleDeleteUser,
  getUserById,
  updateUserById,
}
