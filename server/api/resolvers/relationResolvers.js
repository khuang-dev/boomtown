const { ApolloError } = require("apollo-server");

const relationResolvers = {
  User: {

    items(parent, args, { pgResource }, info) {
      return pgResource.getUserById(parent.id);
    },
    borrowed(parent, args, { pgResource }, info) {
      return pgResource.getUserById(parent.id);
    }
  },

  Item: {
    async itemowner(parent, args, { pgResource }, info) {
      return await pgResource.getUserById(parent.ownerid)
    },
    async tags(parent, args, { pgResource }, info) {
      return await pgResource.getTagsForItems(parent.id)
    },
    async borrower(parent, args, { pgResource }, info) {
      /**
       * or null in the case where the item has not been borrowed.
       */
      return await pgResource.getUserById(parent.borrowerid)
    }
  }
};

module.exports = relationResolvers;
