import Joi from 'joi';

export function validateEnv() {
  const schema = Joi.object({
    DATABASE_URL: Joi.string().uri().required(),
    FYERS_API_KEY: Joi.string().required(),
    FYERS_SECRET_KEY: Joi.string().required(),
    // Add more env vars here as needed
  }).unknown();

  const {error} = schema.validate(process.env, {abortEarly: false});
  if (error) {
    throw new Error(
      'Environment validation error(s):\n' + error.details.map(d => `- ${d.message}`).join('\n')
    );
  }
}
