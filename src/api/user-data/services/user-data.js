"use strict";

/**
 * user-data service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::user-data.user-data", ({ strapi }) => {
  const some = strapi.requestContext.get();
  console.log("77777777777777777", ctx);
  ctx.response()
});
