import Sequelize from 'sequelize';

const db = new Sequelize('postgres://postgres:123@db:5432/monsters', {
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});


export function dbInit () {
  db
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
      db.sync({
        logging: console.log,
        // force:true
      })
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    });
  
  
}

export default db