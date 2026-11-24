import type { Knex } from 'knex';
import { SCHEMAS, TABLES } from '../schemas.js';

const tables = [TABLES.MSS.MESURES, TABLES.MSS.HOMOLOGATIONS];
const colonne = 'id_hash_service';

const remplaceCleEtrangere = (
  knex: Knex,
  nomTable: string,
  onDelete: 'CASCADE' | 'NO ACTION'
) =>
  knex.schema.withSchema(SCHEMAS.MSS).alterTable(nomTable, (table) => {
    table.dropForeign([colonne]);
    table
      .foreign(colonne)
      .references('id_hash')
      .inTable(`${SCHEMAS.MSS}.${TABLES.MSS.SERVICES}`)
      .onDelete(onDelete);
  });

export const up = async (knex: Knex) => {
  for (const nomTable of tables) {
    await remplaceCleEtrangere(knex, nomTable, 'CASCADE');
  }
};

export const down = async (knex: Knex) => {
  for (const nomTable of tables) {
    await remplaceCleEtrangere(knex, nomTable, 'NO ACTION');
  }
};
