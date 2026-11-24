import type { Knex } from 'knex';
import { SCHEMAS, TABLES } from '../schemas.js';

const nomTable = TABLES.MSS.SERVICES;

export const up = (knex: Knex) =>
  knex.schema.withSchema(SCHEMAS.MSS).createTable(nomTable, (table) => {
    table.string('id_hash').primary();
    table.date('date_creation');
    table.string('niveau_securite');
    table.string('region');
    table.string('departement');
    table.string('secteur_activite');
    table.string('type_organisation');
  });

export const down = (knex: Knex) =>
  knex.schema.withSchema(SCHEMAS.MSS).dropTable(nomTable);
