module.exports = rapid => {
  rapid.api.get('/logout', async context => {
    context.cookies.set('authToken');
    context.success();
  });
};
