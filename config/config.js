require('dotenv').config();//instatiate environment variables

CONFIG = {} //Make this global to use all over the application

CONFIG.app          = process.env.APP   || 'dev';
CONFIG.port         = process.env.PORT  || '3000';

CONFIG.db_dialect   = process.env.DB_DIALECT    || 'mysql';
CONFIG.db_host      = process.env.DB_HOST       || '69.16.238.192';
CONFIG.db_port      = process.env.DB_PORT       || '3306';
CONFIG.db_name      = process.env.DB_NAME       || 'dmsystem_twinsave';
CONFIG.db_user      = process.env.DB_USER       || 'dmsystem_wandah';
CONFIG.db_password  = process.env.DB_PASSWORD   || 'viYk!DEU~L$%';

CONFIG.jwt_encryption  = process.env.JWT_ENCRYPTION || 'IG3gWw3EuBsGS9eNpeMtkfQ41uzMCe';
CONFIG.jwt_expiration = process.env.JWT_EXPIRATION || '10000';
