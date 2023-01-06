"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
exports.default = () => ({
    name: 'default',
    type: 'sqlite',
    database: ':memory:',
    migrationsRun: true,
    synchronize: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    autoLoadEntities: true,
});
//# sourceMappingURL=database.js.map