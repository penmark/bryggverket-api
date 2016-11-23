import * as express from 'express';
import { brewers, beers, instagram } from './routes'
import * as morgan from 'morgan';
import * as cors from 'cors';

export const web = express()
  .use(morgan('dev'))
  .use(cors())
  //.get('/', (req, res) => { res.send({message: 'Hello'}) })
  .use('/instagram', instagram)
  .use('/beers', beers)
  .use('/brewers', brewers);
