export const config = {
  HOST: process.env.HOST || '::1',
  IP: process.env.HOST || '::1',
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/bryggverket',
  SECRET: process.env.SECRET || 'mah secret',
  UPLOADS: process.env.UPLOADS || './assets',
  S3_KEY: process.env.S3_KEY,
  S3_SECRET: process.env.S3_SECRET,
  S3_HOST: process.env.S3_HOST,
  S3_BUCKET: process.env.S3_BUCKET
};