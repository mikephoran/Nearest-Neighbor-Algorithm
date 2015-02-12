/*jslint node: true */
module.exports = {
  images: '/public/profileImages/',
  port: process.env.PORT || 3000,
  database: process.env.DB_NAME || 'recalgo', 
  username: process.env.DB_USER || 'user', 
  password: process.env.DB_PASSWORD || 'myPassword',
  host: process.env.DB_HOST ||'localhost',
  db_port: 5432,
  dialect: 'postgres',
  native: true
};