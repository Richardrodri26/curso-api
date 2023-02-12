const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const image = Joi.string().uri();

const createUserSchema = Joi.object({
  name: name.required(),
  lastName: name.required(),
  image: image.required(),
});

const updateUserSchema = Joi.object({
  name: name,
  lastName: name,
  image: image,
});

const getUserSchema = Joi.object({ id: id.required() });

module.exports = {createUserSchema, updateUserSchema, getUserSchema}
