import type { Knex } from 'knex';
import { SCHEMAS, TABLES } from '../schemas.js';

const nomTable = TABLES.MSS.MESURES;

export const up = (knex: Knex) =>
  knex.schema.withSchema(SCHEMAS.MSS).createTable(nomTable, (table) => {
    table
      .string('id_hash_service')
      .references('id_hash')
      .inTable(`${SCHEMAS.MSS}.services_crees`)
      .notNullable();
    table.integer('total_faites');
    table.date('date');
    table.unique(['id_hash_service', 'date']);
  });

export const down = (knex: Knex) =>
  knex.schema.withSchema(SCHEMAS.MSS).dropTable(nomTable);
