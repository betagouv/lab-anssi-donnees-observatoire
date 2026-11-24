import type { Knex } from 'knex';
import { SCHEMAS } from '../schemas.js';

const nomTable = 'services_crees';
const nomColonne = 'type_organisation';

export const up = (knex: Knex) =>
  knex.schema.withSchema(SCHEMAS.MSS).alterTable(nomTable, (table) => {
    table.string(nomColonne);
  });

export const down = (knex: Knex) =>
  knex.schema.withSchema(SCHEMAS.MSS).alterTable(nomTable, (table) => {
    table.dropColumn(nomColonne);
  });
