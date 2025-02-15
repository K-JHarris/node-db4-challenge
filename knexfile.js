// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/database.db3'
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    },
  }
};
