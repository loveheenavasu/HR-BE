'use strict';

/**
 * public-holiday service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::public-holiday.public-holiday');
