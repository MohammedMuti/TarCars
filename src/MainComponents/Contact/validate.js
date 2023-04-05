const Joi = require("joi");

const schema = Joi.object( {
    fullName : Joi.string().min(3).max(30).required().label("Name"),
    email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).label("Email"),
    // phone: Joi.number().lenght(10),
    number: Joi.string().regex(/^[0-9]{10}$/).messages({'string.pattern.base': `Phone number must have 10 digits.`}).required().label("Number"),
    message: Joi.string().label("Message"),


});


export default schema;