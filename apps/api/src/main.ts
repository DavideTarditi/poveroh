import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth';
import userRoutes from './routes/user';
import cookieParser from 'cookie-parser';

const PORT: string = process.env.PORT;
dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: 'http://localhost:4200',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        credentials: true,
    })
);
app.use((req, res, next) => {
    next();
});

app.get('/', (req, res) => {
    res.status(200).json({});
});

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
