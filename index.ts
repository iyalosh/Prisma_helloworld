import { prisma } from './generated/prisma-client'

// A `main` function so that we can use async/await
async function main() {

  // Create a new user called `Alice`
  const user = await prisma
  .user({ id: 'cjsa9vft66w550b592f6w0tum' })

  // const newUser1 = await prisma.createUser({ name: 'Marco' })
  // console.log(`Created new user: ${newUser1.name} (ID: ${newUser1.id})`)
  // Read all users from the database and print them to the console
  // const allUsers = await prisma.users()
  // console.log(allUsers)
  console.log(user)
}

main().catch(e => console.error(e))
