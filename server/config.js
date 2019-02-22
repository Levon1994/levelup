'use strict';

const MONGO_ATLAS_PW = 'nodejs';

module.exports = {
    mongodb: {
        url: `mongodb://NodeJs:${MONGO_ATLAS_PW}@nodejs-shard-00-00-1ava4.mongodb.net:27017,nodejs-shard-00-01-1ava4.mongodb.net:27017,nodejs-shard-00-02-1ava4.mongodb.net:27017/test?ssl=true&replicaSet=NodeJs-shard-0&authSource=admin&retryWrites=true`,
        options: {
            useNewUrlParser: true,
            useCreateIndex: true
        }
    },
    app: {
        secret: 'reswenwyu2fewv^&*^d',
        JWT_KEY : "secret"
    },
    clientSecret: {
        web: {
            cliendId: '986543339762-4p4hjneokh9elm37vva7ert4b7lf1guc.apps.googleusercontent.com',
            clientSecret: '13h5yyO9DIImJKdxRxiedgMh',
            refreshToken: '1/LqAnmHtLChjgzeCSIY0NN4F37puDLwvGq0nx_0L84no',
            email: 'leveluparmenia@gmail.com',
            host: 'smtp.gmail.com',
        }
    }
};