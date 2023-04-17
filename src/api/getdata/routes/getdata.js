module.exports = {
  routes: [
    {
      method: "POST",
      path: "/getdata",
      handler: "getdata.exampleAction",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
