import { prisma } from './generated/prisma-client'

// A `main` function so that we can use async/await
async function main() {
  //Show all users
  // const allUsers = await prisma.users()
  // console.log(allUsers)
  // Create a new user with a new post
  const postsByUser = await prisma
  .user({ email: "iyas@prisma.io" })
  .posts()
  console.log(`All posts by iyas@prisma.io : ${JSON.stringify(postsByUser)}`)
    // console.log('All posts that are written by: ${JSON.stringify(postsByUser)}')
  
}

main().catch(e => console.error(e))
