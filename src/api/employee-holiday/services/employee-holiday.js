'use strict';

/**
 * employee-holiday service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::employee-holiday.employee-holiday');
