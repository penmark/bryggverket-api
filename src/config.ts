export const config = {
  HOST: process.env.HOST || '::1',
  IP: process.env.HOST || '::1',
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/bryggverket',
  MONGO_SSL_CA: process.env.MONGO_SSL_CA,
  MONGO_SSL_KEY: process.env.MONGO_SSL_KEY,
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASS: process.env.MONGO_PASS,
  SECRET: process.env.SECRET || 'mah secret',
  UPLOADS: process.env.UPLOADS || './assets',
  S3_KEY: process.env.S3_KEY,
  S3_SECRET: process.env.S3_SECRET,
  S3_HOST: process.env.S3_HOST,
  S3_BUCKET: process.env.S3_BUCKET
};
