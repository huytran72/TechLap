const handleCreateUser = (fullName: string, email: string, address: string) => {
  console.log(">>> Insert new user to DB:", { fullName, email, address })
}

const getAllUsers = () => {
  return "List of users from DB"
}

export { handleCreateUser, getAllUsers }
