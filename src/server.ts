import dotenv from 'dotenv';
dotenv.config();
import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';

const app: Express = express();
const port: number = Number(process.env.PORT);
/**
 * @Description  : Express Middlewares
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
