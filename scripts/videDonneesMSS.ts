import knex from 'knex';
import configuration from '../knexfile.js';
import { SCHEMAS, TABLES } from '../schemas.js';

const db = knex(configuration);

await db.raw(`TRUNCATE TABLE
  ${SCHEMAS.MSS}.${TABLES.MSS.EXECUTIONS},
  ${SCHEMAS.MSS}.${TABLES.MSS.HOMOLOGATIONS},
  ${SCHEMAS.MSS}.${TABLES.MSS.MESURES},
  ${SCHEMAS.MSS}.${TABLES.MSS.SERVICES}
`);

console.log('Données MSS supprimées.');

await db.destroy();
