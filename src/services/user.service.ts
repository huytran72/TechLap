import { get } from "http"
import { getConnection } from "../config/database"

const handleCreateUser = async (
  fullName: string,
  email: string,
  address: string
) => {
  const connection = await getConnection()
  const [results, fields] = await connection.execute(
    "SELECT * FROM `table` WHERE `name` = ? AND `age` > ?",
    ["Rick C-137", 53]
  )
}

const getAllUsers = async () => {
  const connection = await getConnection()

  // A simple SELECT query
  try {
    const [results, fields] = await connection.query("SELECT * FROM `users`")
    return results
  } catch (err) {
    console.log(err)
  }
  return []
}

export { handleCreateUser, getAllUsers }
