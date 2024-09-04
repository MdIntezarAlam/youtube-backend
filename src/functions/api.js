const serverless = require("serverless-http");
const app = require("../app").default;

module.exports.handler = serverless(app);
