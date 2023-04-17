module.exports = {
  exampleAction: async () => {
    try {
      // fetching data
      const entries = await strapi.entityService.findMany("api::test.test");

      console.log(entries, ">>>>>>>");

      // return the reduced data
      return entriesReduced;
    } catch (err) {
      return err;
    }
  },
};
