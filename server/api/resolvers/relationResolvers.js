const { ApolloError } = require("apollo-server");

const relationResolvers = {
  User: {

    async items(parent, args, { pgResource }, info) {
      try {
      return await pgResource.getItemsForUser(parent.id);
      } catch (error) {
        throw error
      }
    },
    async borrowed(parent, args, { pgResource }, info) {
      try {
      return await pgResource.getBorrowedItemsForUsers(parent.id);
    } catch (error) {
      throw error
    }
  }
  },

  Item: {
    async itemowner(parent, args, { pgResource }, info) {
      try {
      return await pgResource.getUserById(parent.ownerid)
      } catch (error) {
        throw error
      }
    },
    async tags({ itemid }, args, { pgResource }, info) {
      try {
      return await pgResource.getTagsForItem(itemid)
      } catch (error) {
        throw error
      }
    },
    async borrower(parent, args, { pgResource }, info) {
      try {
      return await pgResource.getUserById(parent.borrowerid)
      } catch (error) {
        throw error
      }
    }
  }
};

module.exports = relationResolvers;
