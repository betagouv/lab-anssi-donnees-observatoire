import type { Knex } from 'knex';
import { SCHEMAS, TABLES } from '../schemas.js';

const nomTable = TABLES.MSC.UTILISATEURS;

export const up = (knex: Knex) =>
  knex.schema.withSchema(SCHEMAS.MSC).createTable(nomTable, (table) => {
    table.string('id_hash').primary();
    table.string('region');
    table.string('departement');
    table.string('secteur_activite');
    table.string('type_organisation');
    table.string('taille_organisation');
  });

export const down = (knex: Knex) =>
  knex.schema.withSchema(SCHEMAS.MSC).dropTable(nomTable);
