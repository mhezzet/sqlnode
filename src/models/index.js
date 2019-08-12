import Monster from './Monster.js'
import Habitat from './Habitat.js'

// association
Habitat.hasMany(Monster, { as: 'monster' })
Monster.belongsTo(Habitat,{as:'habitat'})

export default {
  Monster , Habitat
}