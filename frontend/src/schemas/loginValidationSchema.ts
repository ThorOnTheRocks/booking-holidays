import Joi from 'joi';

export const loginValidationSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Email is required.',
      'string.email': 'Please enter a valid email address.',
    }),
  password: Joi.string().min(6).required().messages({
    'string.empty': 'Password is required.',
  }),
});
