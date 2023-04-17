"use strict";
const jwt = require('jsonwebtoken')
/**
 * A set of functions called "actions" for `getdata`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      const email = ctx.request.body.email;
      const password = ctx.request.body.password;
      console.log(email, "email");
      const entries = await strapi.entityService.findMany(
        "api::userdetail.userdetail"
      );

      const filteredEntries = entries.filter((entry) => entry.email === email);
      const userId = filteredEntries.map((data) => data.id);

      for (let i = 0; i < filteredEntries.length; i++) {}

      const password_change = filteredEntries.map(
        (data) => data.password_change
      );

      if (filteredEntries.length > 0) {
        const entry = filteredEntries[0];

        if (entry.password === password) {
          console.log("Email and password matched", userId);
          ctx.status = 200;
          const token = jwt.sign({userId},'harvic')
          ctx.body = {
            message: "Login successful",
            userId: userId,
            password_change: password_change,
            token:token
          };
          console.log(token,"token from the backend")
          // ctx.response = userId
        } else {
          console.log("Password does not match");
          ctx.status = 401;
          ctx.body = { message: "Invalid email or password" };
        }
      } else {
        console.log("Email not found");
        ctx.status = 401;
        ctx.body = { message: "Invalid email or password" };
      }
    } catch (err) {
      console.log(err);
      ctx.status = 500;
      ctx.body = { message: "Internal server error" };
    }
  },
};
