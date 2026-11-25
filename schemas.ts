export const SCHEMAS = { MSS: 'mss', MSC: 'msc' } as const;

export const TABLES = {
  MSS: {
    EXECUTIONS: 'executions',
    HOMOLOGATIONS: 'homologations_realisees',
    MESURES: 'mesures_faites',
    SERVICES: 'services_crees',
  },
  MSC: {
    EXECUTIONS: 'executions',
    UTILISATEURS: 'utilisateurs',
    TESTS: 'tests_realises',
    PARCOURS: 'parcours_rejoints',
    BADGES_CYBERDEPART: 'badges_cyberdepart',
    COMPLETIONS_PARCOURS: 'completions_parcours',
  },
} as const;
