'use strict';

const getLoginData = () => {
    console.log("data received")
}

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::user-data.user-data');
