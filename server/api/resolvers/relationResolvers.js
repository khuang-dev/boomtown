const { ApolloError } = require("apollo-server");

const relationResolvers = {
  User: {

    async items(parent, args, { pgResource }, info) {
      try {
        return await pgResource.getItemsForUser(parent.id);
      } catch (error) {
        throw new ApolloError(error)
      }
    },
    async borrowed(parent, args, { pgResource }, info) {
      try {
        return await pgResource.getBorrowedItemsForUser(parent.id);
      } catch (error) {
        throw new ApolloError(error)
      }
    }
  },

  Item: {
    async itemowner(parent, args, { pgResource }, info) {
      try {
        return await pgResource.getUserById(parent.ownerid)
      } catch (error) {
        throw new ApolloError(error)
      }
    },
    async tags(parent, args, { pgResource }, info) {
      try {
        return await pgResource.getTagsForItem(parent.id)
      } catch (error) {
        throw new ApolloError(error)
      }
    },
    async borrower(parent, args, { pgResource }, info) {
      try {
        return await pgResource.getUserById(parent.borrowerid)
      } catch (error) {
        throw new ApolloError(error)
      }
    }
  }
};

module.exports = relationResolvers;
