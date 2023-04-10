// api/login/controllers.js
'use strict';

module.exports = {
  async login(ctx) {
    const { username, password } = ctx.request.body;
    // TODO: Add logic to verify credentials and authenticate user
    console.log(username,password,"here are the credentials")
    ctx.send({ message: `Received username: ${username}, password: ${password}` });
  }
};
