"use strict";

// {
//     anything
// }

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::user-data.user-data", (ctx)=>{
    console.log("77777777777777777",ctx)
} );
