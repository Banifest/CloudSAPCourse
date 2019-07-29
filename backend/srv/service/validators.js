const Joi = require('joi');

const schemas = {
    'paper': Joi.object().keys({
        name: Joi.string().max(50).min(1),
        url: Joi.string().uri().min(1),
        description: Joi.string().max(100),
        createOn: Joi.date().timestamp("unix"),
        createBy: Joi.string().max(10).min(1),
    }),

    'offices': Joi.object().keys({
        title: Joi.string().max(50).min(1),
        website: Joi.string().max(50).min(1),
        address: Joi.string().max(50).min(1),
    }),

    'agents': Joi.object().keys({
        name: Joi.string().max(50).min(1),
        email: Joi.string().email().max(50).min(1),
        tel: Joi.string().max(50).min(1),
    }),
};

exports.check = function (schema, body)
{
    if (!schemas[schema]) return {};
    return Joi.validate(body, schemas[schema], {presence: 'required'});
};