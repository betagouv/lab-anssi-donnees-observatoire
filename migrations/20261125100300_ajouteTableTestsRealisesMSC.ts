import type { Knex } from 'knex';
import { SCHEMAS, TABLES } from '../schemas.js';

const nomTable = TABLES.MSC.TESTS;

export const up = (knex: Knex) =>
  knex.schema.withSchema(SCHEMAS.MSC).createTable(nomTable, (table) => {
    table.string('id_hash').primary();
    table.string('type_test').notNullable();
    table.date('date_realisation');
    table.string('niveau');
    table
      .string('id_hash_utilisateur')
      .references('id_hash')
      .inTable(`${SCHEMAS.MSC}.${TABLES.MSC.UTILISATEURS}`)
      .onDelete('CASCADE');
    table.string('region_declaree');
    table.string('secteur_activite_declare');
    table.string('taille_organisation_declaree');
  });

export const down = (knex: Knex) =>
  knex.schema.withSchema(SCHEMAS.MSC).dropTable(nomTable);
