const config = require("../knex.js");
const knex = require("knex")(config);

knex.migrate.latest([config]);
module.exports = knex;
