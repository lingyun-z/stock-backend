import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as cors from 'cors';
import router from './routes';
dotenv.config();
const port = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(compression());
app.use(cors());

app.use(router);

const server = app.listen({ port }, () => {
  console.log(`server running on http://localhost:${port}`);
});
