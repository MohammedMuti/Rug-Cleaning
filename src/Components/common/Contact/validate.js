const Joi = require("joi");

const schema = Joi.object({
  firstName: Joi.string().min(3).max(30).required().label("fisrtName"),
  lastName: Joi.string().min(3).max(30).required().label("lastName"),
  email: Joi.string()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .label("Email"),
  number: Joi.string()
    .regex(/^[0-9]{10}$/)
    .messages({ "string.pattern.base": `Phone number must have 10 digits.` })
    .required()
    .label("Number"),
  message: Joi.string().label("Message"),
});

export default schema;
