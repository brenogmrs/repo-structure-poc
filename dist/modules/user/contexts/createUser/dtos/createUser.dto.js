"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDoc = exports.CreateUserDto = void 0;
const user_entity_1 = require("../../../../../shared/entities/user.entity");
const swagger_1 = require("@nestjs/swagger");
const omit_type_helper_1 = require("@nestjs/mapped-types/dist/omit-type.helper");
class CreateUserDto extends (0, omit_type_helper_1.OmitType)(user_entity_1.User, [
    'id',
    'createdAt',
    'updatedAt',
    'deletedAt',
]) {
}
exports.CreateUserDto = CreateUserDto;
class CreateUserDoc extends (0, swagger_1.OmitType)(user_entity_1.User, [
    'id',
    'createdAt',
    'updatedAt',
    'deletedAt',
]) {
}
exports.CreateUserDoc = CreateUserDoc;
//# sourceMappingURL=createUser.dto.js.map