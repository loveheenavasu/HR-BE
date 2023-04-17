"use strict";

/**
 * A set of functions called "actions" for `admincontrol`
 */

module.exports = {
  adminLogin: async (ctx, next) => {
    try {
      const { Email, Password } = ctx.request.body;
      console.log(Email, Password, "email password");
      const detail = await strapi.entityService.findMany(
        "api::admincontroller.admincontroller"
      );
      const filteredEntries = detail.filter((entry) => entry.email);

      if (filteredEntries.length > 0) {
        const entry = filteredEntries[0];
        if (Email === entry.email && Password === entry.password) {
          ctx.status = 200;
          ctx.body = { message: "Login successful",code: 200 }; 
          console.log("passwords match");
        } else {
          ctx.body = { message: "Invalid email or password",code: 300 };
          console.log("password does not match");
        }
      } else {
        ctx.body = { message: "Invalid email or password",code: 404 };
        console.log("no email found");
      }

      console.log(detail, "detail from the backend in the api");
    } catch (error) {
      console.log(error, "error in the controller");
      ctx.body = { message: "Internal server error" };
      ctx.status = 500;
    }
  },
};



// exampleAction: async (ctx, next) => {
//   try {
//     ctx.body = 'ok';
//   } catch (err) {
//     ctx.body = err;
//   }
// }
