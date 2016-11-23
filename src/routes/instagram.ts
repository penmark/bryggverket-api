import { instagram } from 'instagram-node';
import { logger } from '../server';
import { Router } from 'express';

const ig = instagram();
ig.use({access_token: process.env.INSTAGRAM_TOKEN});

export const latest = Router();
latest.get('/', (req, res, next) => {
  const count = req.query.count || 9;
  ig.user_self_media_recent({count}, (err, medias, pagination, remaining, limit) => {
    if (err) {
      logger.error(err);
      return res.send(err.body)
    }
    logger.debug('media', {numMedias: medias.length, pagination, remaining, limit});
    res.send(medias)
  })
});