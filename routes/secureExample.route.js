module.exports = rapid => {
  const { middleware } = rapid;

  // Only accessable with a valid Authorization header
  rapid.api.get('/secure', middleware.auth(), async context => {
    context.response.body = {
      success: true,
    };
  });
};
