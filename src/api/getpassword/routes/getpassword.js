module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/getpassword',
     handler: 'getpassword.newPassword',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
