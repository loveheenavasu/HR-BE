"use strict";
// const {connection} = require('../../../../config/database')
// const database = require('../../../../config/database');
const jwt = require("jsonwebtoken");

module.exports = {
  newPassword: async (ctx, next) => {
    try {
      const newPass = ctx.request.body.newPass;
      const userId = ctx.request.body.userId;
      console.log(newPass, "newpassword");
      console.log(strapi.db.query, "connections");
      var newupdate = await strapi.db
        .query("api::userdetail.userdetail")
        .update({
          where: { id: userId },
          data: {
            password: newPass,
            password_change: true,
          },
        });
        // const userData = await strapi.query('userdetail').findOne({ id: userId });
        const token = await jwt.sign({userId},'vicky')
        ctx.body = token
      console.log(token, "userData");
      //  ctx.body = newPass
    } catch (error) {
      console.log(error, "in new password");
    }
  },
};
