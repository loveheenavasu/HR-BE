'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('admin-panel')
      .service('myService')
      .getWelcomeMessage();
  },
});
