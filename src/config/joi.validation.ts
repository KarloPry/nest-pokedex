import * as Joi from 'joi';

export const JoiValdidationSchema = Joi.object({
  MONGO_URL: Joi.required(),
  PORT: Joi.number().default(3005),
  DEFAULT_LIMIT: Joi.number().default(6),
});
