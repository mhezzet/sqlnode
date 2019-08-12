import express from 'express'
import models from '../models/index.js'

const router = express.Router()

router.get('/', async (req, res) => 
  res.send(await models.Habitat.findAll())
)

router.get('/:id', async (req, res) => 
  res.send(await models.Habitat.findAll({where: { id: req.params.id }}))
)

router.post('/',async (req, res) => 
  res.send(await models.Habitat.create(req.body))
)

router.put('/:id', async (req, res) =>
  res.send(await models.Habitat.update(req.body, { where: { id: req.params.id }}))
)

router.delete('/:id', async (req, res) => {
  try {
    await models.Habitat.destroy({ where: { id: req.params.id } })
    res.send('deleted')
    
  } catch (error) {
    res.send(error)
  }
})

export default router