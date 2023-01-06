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
exports.UpdateUserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../../../../../shared/entities/user.entity");
const update_user_dto_1 = require("../dtos/update-user.dto");
const update_user_service_1 = require("../services/update-user.service");
let UpdateUserController = class UpdateUserController {
    constructor(service) {
        this.service = service;
    }
    async index(id, data) {
        return this.service.execute(id, data);
    }
};
__decorate([
    (0, swagger_1.ApiBody)({ type: update_user_dto_1.UpdateUserDoc }),
    (0, swagger_1.ApiResponse)({ type: user_entity_1.User }),
    (0, common_1.HttpCode)(201),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UpdateUserController.prototype, "index", null);
UpdateUserController = __decorate([
    (0, common_1.Controller)({ path: 'users' }),
    __metadata("design:paramtypes", [update_user_service_1.UpdateUserService])
], UpdateUserController);
exports.UpdateUserController = UpdateUserController;
//# sourceMappingURL=update-user.controller.js.map