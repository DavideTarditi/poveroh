import express from 'express';
import dotenv from 'dotenv';
import { createHandler } from 'graphql-http/lib/use/express';
import { userResolver } from './resolvers/user.resolvers';
import cors from 'cors';

import { schema } from './core/schema';

const PORT = process.env.PORT;
dotenv.config();
const app = express();

app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
);

const rootValue = {
    ...userResolver,
};

app.get('/ciao', (req, res) => {
    return res.status(200).json('hello ciao world!');
})

app.use(
    '/graphql',
    createHandler({
        schema,
        rootValue,
    })
);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
