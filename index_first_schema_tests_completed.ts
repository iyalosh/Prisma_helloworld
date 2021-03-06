import { prisma } from './generated/prisma-client'

// A `main` function so that we can use async/await
async function main() {

  // Create a new user called `Alice`
  // const user = await prisma
  // .user({ id: 'cjsa9vft66w550b592f6w0tum' })
  // const usersCalledAllice = await prisma.users(
  //   {
  //     where: {
  //       name: 'Alice'
  //     }
  //   }
  // )
  // const newUser1 = await prisma.createUser({ name: 'Marco' })
  // console.log(`Created new user: ${newUser1.name} (ID: ${newUser1.id})`)
  // Read all users from the database and print them to the console
  // const allUsers = await prisma.users()
  // console.log(allUsers)
  // console.log(user)
  // console.log(usersCalledAllice)
  // const updatedUser = await prisma
  // .updateUser({
  //   where: { id: 'cjsa99exq6nv90b5921ahyqve' },
  //   data: { name: 'Bob' }
  // })
  // const deletedUser = await prisma
  // .deleteUser({ id: 'cjsa9jtsu6rc10b591mpqtppa' })

  const allUsers = await prisma.users()
  console.log(allUsers)
  const allPosts = await prisma.posts()
  console.log(allPosts)
}

main().catch(e => console.error(e))
