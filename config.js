import PgPubsub from '@graphile/pg-pubsub';
import { makePluginHook, postgraphile } from 'postgraphile';

const pluginHook = makePluginHook([PgPubsub]);


export const schemas = ['public'];

export const options = {
    pluginHook,
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    subscriptions: true
};

export const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;