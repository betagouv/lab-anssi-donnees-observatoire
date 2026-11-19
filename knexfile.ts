import type { Knex } from 'knex';

const configuration: Knex.Config = {
  client: 'pg',
  connection: process.env.URL_SERVEUR_BASE_DONNEES,
  pool: { min: 0, max: 5 },
  migrations: {
    tableName: 'knex_migrations',
    extension: 'ts',
    loadExtensions: ['.ts'],
  },
};

export default configuration;
