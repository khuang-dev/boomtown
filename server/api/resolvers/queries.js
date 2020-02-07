const { ApolloError } = require("apollo-server");

const queryResolvers = app => ({
  viewer(parent, args, { user }, info) {
    return user;
  },
  async user(parent, { id }, { pgResource }, info) {
    try {
      const user = await pgResource.getUserById(id);
      return user;
    } catch (e) {
      throw new ApolloError(e);
    }
  },
  async items(parent, { filter }, { pgResource }, info) {
    try {
      return await pgResource.getItems(filter);
    } catch (e) {
      throw e
    }
  },
  async tags(parent, args, { pgResource }, info) {
    try {
      return await pgResource.getTags();
    } catch (e) {
      throw e
    }
  },
});
module.exports = queryResolvers;
