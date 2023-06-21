import { config } from 'dotenv';
import { options, port, schemas } from './config.js';
import express from 'express';
import {postgraphile} from 'postgraphile';

config();

const postgraphileService = postgraphile(process.env.CONNECTION_STRING, schemas, options)
const app = express();
app.use(postgraphileService);

const server = app.listen(port, () => {
    const address = server.address();
    if (typeof address !== 'string') {
      const href = `http://localhost:${address.port}${options.graphiqlRoute || '/graphiql'}`;
      console.log(`PostGraphiQL available at ${href} 🚀`);
    } else {
      console.log(`PostGraphile listening on ${address} 🚀`);
    }
  });