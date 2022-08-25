const Joi = require('joi');

const registerSchema = Joi.object({
    name: Joi.string().min(3).max(99).required(),
    lastname: Joi.string().min(3).max(99).required(),
    nickname: Joi.string().alphanum().min(6).max(99).required(),
    email: Joi.string().required().email(),
    password: Joi.string().alphanum().min(6).max(99).required(),
})

module.exports = registerSchema;