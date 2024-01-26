import Joi from 'joi';

export const userRegistrationSchema = Joi.object({
  firstName: Joi.string().required().messages({
    'string.empty': 'First name is required.',
    'string.base': 'First name must be a string.',
  }),
  lastName: Joi.string().required().messages({
    'string.empty': 'Last name is required.',
    'string.base': 'Last name must be a string.',
  }),
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
    .messages({
      'string.empty': 'Username is required',
      'string.base': 'Username must be a string.',
      'string.min': 'Username must be at least 3 characters',
      'string.max': 'Username must contains max 30 characters',
    }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Email is required.',
      'string.email': 'Please enter a valid email address.',
    }),
  password: Joi.string().min(6).required().messages({
    'string.empty': 'Password is required.',
    'string.min': 'Password should be at least 6 characters long.',
  }),
  confirmPassword: Joi.string()
    .equal(Joi.ref('password'))
    .required()
    .messages({
      'any.only': 'Confirm password does not match.',
      'any.required': 'Confirm password is required.',
    }),
});
