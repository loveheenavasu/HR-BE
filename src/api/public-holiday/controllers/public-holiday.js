'use strict';

/**
 * public-holiday controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::public-holiday.public-holiday');
