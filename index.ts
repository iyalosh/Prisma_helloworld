import { prisma } from './generated/prisma-client'
import { GraphQLServer } from 'graphql-yoga'

// Implementing the resolvers relying on GraphQL Server (yoga) and context attached by Prisma
const resolvers = {
  Query: {
    publishedPosts(parent, args, context) {
      return context.prisma.posts({ where: { published: true } })
    },
    post(parent, args, context) {
      return context.prisma.post({ id: args.postId })
    },
    postsByUser(parent, args, context) {
      return context.prisma.user({
        id: args.userId
      }).posts()
    }
  },
  Mutation: {
    createDraft(parent, args, context) {
      return context.prisma.createPost(
        {
          title: args.title,
          author: {
            connect: { id: args.userId }
          }
        },

      )
    },
    publish(parent, args, context) {
      return context.prisma.updatePost(
        {
          where: { id: args.postId },
          data: { published: true },
        },

      )
    },
    createUser(parent, args, context) {
      return context.prisma.createUser(
        { name: args.name },
      )
    }
  },
  User: {
    posts(parent, args, context) {
      return context.prisma.user({
        id: parent.id
      }).posts()
    }
  },
  Post: {
    author(parent, args, context) {
      return context.prisma.post({
        id: parent.id
      }).author()
    }
  }
}
//Configuring the GraphQL server relying on GraphQL-Yoga server and based on configuration in ./schema.graphql and context attached by Prisma core
const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: {
    prisma
  },
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
