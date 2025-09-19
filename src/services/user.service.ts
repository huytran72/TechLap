const handleCreateUser = (fullName: string, email: string, address: string) => {
  console.log(">>> Insert new user to DB:", { fullName, email, address })
}

export { handleCreateUser }
