import monsters from '../routes/monsters.js'
import habitat from '../routes/habitat.js'



export default function (app) {
  app.use('/monsters',monsters)
  app.use('/habitats',habitat)
}