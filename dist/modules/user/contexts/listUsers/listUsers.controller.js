"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../../../../shared/entities/user.entity");
const listUsers_dto_1 = require("./dtos/listUsers.dto");
const listUsers_service_1 = require("./listUsers.service");
let ListUsersController = class ListUsersController {
    constructor(service) {
        this.service = service;
    }
    async index(query) {
        return this.service.execute(query);
    }
};
__decorate([
    (0, swagger_1.ApiResponse)({ type: [user_entity_1.User] }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [listUsers_dto_1.ListUsersDto]),
    __metadata("design:returntype", Promise)
], ListUsersController.prototype, "index", null);
ListUsersController = __decorate([
    (0, common_1.Controller)({ path: 'users' }),
    __metadata("design:paramtypes", [listUsers_service_1.ListUsersService])
], ListUsersController);
exports.ListUsersController = ListUsersController;
//# sourceMappingURL=listUsers.controller.js.map