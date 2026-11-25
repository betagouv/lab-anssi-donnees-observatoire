import type { Knex } from 'knex';
import { SCHEMAS } from '../schemas.js';

export const up = (knex: Knex) => knex.schema.createSchema(SCHEMAS.MSC);

export const down = (knex: Knex) => knex.schema.dropSchema(SCHEMAS.MSC);
