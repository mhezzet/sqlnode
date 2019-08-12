import Sequelize from 'sequelize'
import uuid from 'uuid/v4.js'
import db from '../utils/database.js'

const Habitat = db.define('habitat', {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: () => uuid()
  },
  name: {
    type:Sequelize.STRING
  },
  climate: {
    type:Sequelize.STRING
  },
  temperature: {
    type:Sequelize.INTEGER
  }
})

export default Habitat