
module.exports = rapid => {
  rapid.api.get(
    '/posts',
    async context => {
      const posts = await rapid.models.Post.query().eager('author');

      context.response.body = { posts };
    }
  );
};
