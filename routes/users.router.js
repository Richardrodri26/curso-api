const express = require('express');
const router = express.Router()
const UsersService = require('../services/users.service')
const validatorHandler = require('../middlewares/validator.handler')
const {createUserSchema, updateUserSchema, getUserSchema} = require('../schemas/users.schemas')

const service = new UsersService();

router.get('/', (req,res)=> {
  const user = service.find()
  res.json(user)
})

router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  (req, res)=>{
  const { id } = req.params;
  const user = service.findOne(id)
  res.json(user)
})

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  (req,res)=>{
  const body = req.body;
  const newUser = service.create(body)
  res.json(newUser)
})

router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const user = service.update(id, body)
  res.json(user);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rta = service.delete(id)
  res.json(rta);
});

module.exports = router
