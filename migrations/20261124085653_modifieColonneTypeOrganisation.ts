import type { Knex } from 'knex';
import { SCHEMAS, TABLES } from '../schemas.js';

const nomTable = TABLES.MSS.SERVICES;
const ancienNomColonne = 'type_organisation';
const nouveauNomColonne = 'taille_organisation';

export const up = (knex: Knex) =>
  knex.schema.withSchema(SCHEMAS.MSS).alterTable(nomTable, (table) => {
    table.renameColumn(ancienNomColonne, nouveauNomColonne);
  });

export const down = (knex: Knex) =>
  knex.schema.withSchema(SCHEMAS.MSS).alterTable(nomTable, (table) => {
    table.renameColumn(nouveauNomColonne, ancienNomColonne);
  });
