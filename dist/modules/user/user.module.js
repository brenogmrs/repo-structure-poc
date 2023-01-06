"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../../shared/entities/user.entity");
const user_repository_1 = require("../../shared/repositories/user.repository");
const createUser_controller_1 = require("./contexts/createUser/createUser.controller");
const createUser_service_1 = require("./contexts/createUser/createUser.service");
const listUsers_controller_1 = require("./contexts/listUsers/listUsers.controller");
const listUsers_service_1 = require("./contexts/listUsers/listUsers.service");
const updateUser_controller_1 = require("./contexts/updateUser/updateUser.controller");
const updateUser_service_1 = require("./contexts/updateUser/updateUser.service");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
        controllers: [
            createUser_controller_1.CreateUserController,
            listUsers_controller_1.ListUsersController,
            updateUser_controller_1.UpdateUserController,
        ],
        providers: [
            createUser_service_1.CreateUserService,
            listUsers_service_1.ListUsersService,
            updateUser_service_1.UpdateUserService,
            user_repository_1.UserRepository,
        ],
        exports: [user_repository_1.UserRepository],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map