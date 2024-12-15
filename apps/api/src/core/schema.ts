import { buildSchema } from "graphql"

export const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    surname: String!
    email: String!
    created_at: String!
  }

  type Transaction {
    id: ID!
    title: String!
    type: String!
    note: String
    created_at: String!
  }

  type Query {
    login(email: String!, password: String!): User
  }
`)
