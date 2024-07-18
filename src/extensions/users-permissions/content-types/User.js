module.exports = {
    async me(ctx) {
      const user = ctx.state.user;
  
      if (!user) {
        return ctx.badRequest(null, [{ messages: [{ id: 'No authorization header was found' }] }]);
      }
  
      const data = await strapi.plugins['users-permissions'].services.user.fetch({ id: user.id });
  
      ctx.send(data);
    },
  };
  