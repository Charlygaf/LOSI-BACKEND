const publicRoutes = require("./publicRoutes");
const adminRoutes = require("./adminRoutes");
const authRouter = require("./authRoutes");

module.exports = (app) => {
  app.use("/guest", publicRoutes);
  app.use("/admin", adminRoutes);
  app.use("/user", authRouter);
};
