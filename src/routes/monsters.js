import express from 'express'
import models from '../models/index.js'

const router = express.Router()

router.get('/', async (req, res) => 
  res.send(await models.Monster.findAll())
)

router.get('/:id', async (req, res) => 
  res.send(await models.Monster.findAll({where: { id: req.params.id }}))
)

router.post('/',async (req, res) => 
  res.send(await models.Monster.create(req.body))
)

router.put('/:id', async (req, res) =>
  res.send(await models.Monster.update(req.body, { where: { id: req.params.id }}))
)

router.delete('/:id', async (req, res) => {
  try {
    await models.Monster.destroy({ where: { id: req.params.id } })
    res.send('deleted')
    
  } catch (error) {
    res.send(error)
  }
})

export default router