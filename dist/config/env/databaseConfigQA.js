"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfigQA = void 0;
const dotenv = require("dotenv");
const path_1 = require("path");
dotenv.config();
const databaseConfigQA = () => ({
    type: 'sqlite',
    database: ':memory:',
    migrationsRun: true,
    synchronize: true,
    entities: [(0, path_1.join)(__dirname, '../../shared/entities/*.entity.{ts,js}')],
});
exports.databaseConfigQA = databaseConfigQA;
//# sourceMappingURL=databaseConfigQA.js.map