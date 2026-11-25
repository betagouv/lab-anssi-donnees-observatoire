import type { Knex } from 'knex';
import { SCHEMAS, TABLES } from '../schemas.js';

const nomTable = TABLES.MSC.EXECUTIONS;

export const up = (knex: Knex) =>
  knex.schema.withSchema(SCHEMAS.MSC).createTable(nomTable, (table) => {
    table.timestamp('date_execution', { useTz: true }).notNullable();
  });

export const down = (knex: Knex) =>
  knex.schema.withSchema(SCHEMAS.MSC).dropTable(nomTable);
