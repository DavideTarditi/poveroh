import express from "express"
import dotenv from "dotenv"
import { createHandler } from "graphql-http/lib/use/express"
import { userResolver } from "./resolvers/user.resolvers"
import { schema } from "./core/schema"

const PORT = process.env.PORT

dotenv.config()
const app = express()

const rootValue = {
    ...userResolver
}

app.use(
    "/graphql",
    createHandler({
        schema,
        rootValue
    })
)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/graphql`)
})