module.exports = {
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: "./user-auth.db3",
  },
  migrations: {
    directory: "./migrations",
  },
  // seeds: {
  //   directory: "./seeds",
  // },
  pool: {
    afterCreate: (conn, done) => {
      conn.run("PRAGMA foreign_keys = ON", done);
    },
  },
};
