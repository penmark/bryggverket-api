import { Router } from 'express';
import * as keystone from 'keystone';
//keystone.init()

function rot13(value: string): string {
  return value.replace(/[a-z]/ig, (c: string) => {
    return String.fromCharCode(c.charCodeAt(0) + ( c.toUpperCase() <= "M" ? 13 : -13 ));
  });
}

export const brewers = Router();
brewers.get('/', (req, res) => {
  const Brewer = keystone.list('Brewer');
  Brewer.model.find(null, {name: 1, image: 1, email: 1})
    .exec()
    .then(brewers => {
      res.send(brewers.map(b => {b.email = rot13(b.email); return b}))
    })
});