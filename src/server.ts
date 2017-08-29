import * as keystone from 'keystone';
import { web } from './web';
import { config } from './config'
import * as fs from 'fs'

const mongoOptions = {
  user: config.MONGO_USER,
  pass: config.MONGO_PASS
}

keystone.init({
  'name': 'BvApi',
  'auto update': true,
  'mongo': config.MONGO_URI,
  'session': false,
  'auth': true,
  'user model': 'Brewer',
  'cookie secret': config.SECRET,
  'static': 'static',
  'mongo options': mongoOptions
});
// tslint:disable-next-line
keystone.import('models');

keystone.set('nav', {
  'brewers': 'brewers',
  'beers': 'beers'
});
keystone.set('routes', web);
keystone.start();
