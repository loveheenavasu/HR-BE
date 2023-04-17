module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/admincontrol',
     handler: 'admincontrol.adminLogin',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
