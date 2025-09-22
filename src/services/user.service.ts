import { get } from "http"
import { getConnection } from "../config/database"

const handleCreateUser = (fullName: string, email: string, address: string) => {
  console.log(">>> Insert new user to DB:", { fullName, email, address })
}

const getAllUsers = async () => {
  const connection = await getConnection()
  return "List of users from DB"
}

export { handleCreateUser, getAllUsers }
