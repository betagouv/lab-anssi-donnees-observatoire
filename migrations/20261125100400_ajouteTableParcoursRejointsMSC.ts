import type { Knex } from 'knex';
import { SCHEMAS, TABLES } from '../schemas.js';

const nomTable = TABLES.MSC.PARCOURS;

export const up = (knex: Knex) =>
  knex.schema.withSchema(SCHEMAS.MSC).createTable(nomTable, (table) => {
    table
      .string('id_hash_utilisateur')
      .primary()
      .references('id_hash')
      .inTable(`${SCHEMAS.MSC}.${TABLES.MSC.UTILISATEURS}`)
      .onDelete('CASCADE');
    table.date('date');
  });

export const down = (knex: Knex) =>
  knex.schema.withSchema(SCHEMAS.MSC).dropTable(nomTable);
