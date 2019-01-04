module.exports = rapid => {
  const { createUser } = rapid.actions;
  const { modelToJWT } = rapid.helpers;

  rapid.api.post("/register", async context => {
    const fields = context.request.body;
    const user = await createUser(fields);
    const authToken = await modelToJWT(user);

    context.cookies.set("authToken", authToken, { httpOnly: true });
    context.success({
      user,
      authToken: process.env["NODE_ENV"] === "test" ? authToken : null
    });
  });
};
