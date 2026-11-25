import type { Knex } from 'knex';
import { SCHEMAS, TABLES } from '../schemas.js';

const nomTable = TABLES.MSC.COMPLETIONS_PARCOURS;

export const up = (knex: Knex) =>
  knex.schema.withSchema(SCHEMAS.MSC).createTable(nomTable, (table) => {
    table
      .string('id_hash_utilisateur')
      .notNullable()
      .references('id_hash')
      .inTable(`${SCHEMAS.MSC}.${TABLES.MSC.UTILISATEURS}`)
      .onDelete('CASCADE');
    table.integer('seuil').notNullable().checkIn(['50', '80', '100']);
    table.date('date');
    table.primary(['id_hash_utilisateur', 'seuil']);
  });

export const down = (knex: Knex) =>
  knex.schema.withSchema(SCHEMAS.MSC).dropTable(nomTable);
