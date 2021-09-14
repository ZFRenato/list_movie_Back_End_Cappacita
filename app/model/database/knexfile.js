require ('dotenv').config();

// Update with your config settings.

module.exports = {
  
    client: 'mysql2',
    connection: {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_DATABASE
    },
    debug: false
  

};
