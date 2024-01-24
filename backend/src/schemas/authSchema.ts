import Joi from 'joi';

export const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': `'email' must be a valid email address`,
    'any.required': `'email' is a required field`,
  }),
  password: Joi.string().required().messages({
    'any.required': `'password' is a required field`,
  }),
});
