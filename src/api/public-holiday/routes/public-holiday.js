'use strict';

/**
 * public-holiday router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::public-holiday.public-holiday');
