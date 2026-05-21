const router = require('express').Router()
const { getAll, getById, create, update, remove } = require('../controllers/areas.controller')
const { checkRole } = require('../middleware/authorize')
const { validate } = require('../middleware/validate')
const { createAreaSchema, updateAreaSchema } = require('../schemas/areas.schema')

router.use(checkRole('admin')) 

router.get('/', getAll)
router.get('/:id', getById)
router.post('/', validate(createAreaSchema), create)
router.put('/:id', validate(updateAreaSchema), update)
router.delete('/:id', remove)

module.exports = router
