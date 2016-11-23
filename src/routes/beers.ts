import { Router } from 'express';
import * as keystone from 'keystone';

export const beers = Router();
beers.get('/', (req, res) => {
  const Beer = keystone.list('Beer');
  Beer.model.find()
    .sort('name')
    .exec()
    .then(beers => res.send(beers))
});