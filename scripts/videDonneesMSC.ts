import knex from 'knex';
import configuration from '../knexfile.js';
import { SCHEMAS, TABLES } from '../schemas.js';

const db = knex(configuration);

await db.raw(`TRUNCATE TABLE
  ${SCHEMAS.MSC}.${TABLES.MSC.EXECUTIONS},
  ${SCHEMAS.MSC}.${TABLES.MSC.TESTS},
  ${SCHEMAS.MSC}.${TABLES.MSC.PARCOURS},
  ${SCHEMAS.MSC}.${TABLES.MSC.BADGES_CYBERDEPART},
  ${SCHEMAS.MSC}.${TABLES.MSC.COMPLETIONS_PARCOURS},
  ${SCHEMAS.MSC}.${TABLES.MSC.UTILISATEURS}
`);

console.log('Données MSC supprimées.');

await db.destroy();
