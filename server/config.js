'use strict';

const MONGO_ATLAS_PW = 'nodejs';

module.exports = {
    mongodb: {
        url: `mongodb://NodeJs:${MONGO_ATLAS_PW}@nodejs-shard-00-00-1ava4.mongodb.net:27017,nodejs-shard-00-01-1ava4.mongodb.net:27017,nodejs-shard-00-02-1ava4.mongodb.net:27017/test?ssl=true&replicaSet=NodeJs-shard-0&authSource=admin&retryWrites=true`,
        options: {
            useNewUrlParser: true,
            useCreateIndex: true
        }
    }
};