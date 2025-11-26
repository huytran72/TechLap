import { getConnection } from "config/database"
import { prisma } from "config/client"

const handleCreateUser = async (
  name: string,
  email: string,
  address: string
) => {
  const newUser = await prisma.user.create({
    data: {
      name: name,
      username: email,
      address: address,
      password: "",
      accountType: "ACCOUNT_TYPE.SYSTEM",
      avatar: "",
      phone: "",
    },
  })
}

const getAllUsers = async () => {
  const users = await prisma.user.findMany()
  return users
}

const getAllRoles = async () => {
  const roles = await prisma.role.findMany()
  return roles
}

const handleDeleteUser = async (id: string) => {
  await prisma.user.delete({
    where: { id: Number(id) },
  })
}

const getUserById = async (id: string) => {
  const result = await prisma.user.findUnique({
    where: { id: Number(id) },
  })
  return result
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
      username: email,
      address: address,
      name: name,
      password: "",
      accountType: "",
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
  getAllRoles,
}
