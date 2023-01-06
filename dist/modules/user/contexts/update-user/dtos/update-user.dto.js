"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDoc = exports.UpdateUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const swagger_1 = require("@nestjs/swagger");
const create_user_dto_1 = require("../../createUser/dtos/create-user.dto");
class UpdateUserDto extends (0, mapped_types_1.PartialType)(create_user_dto_1.CreateUserDto) {
}
exports.UpdateUserDto = UpdateUserDto;
class UpdateUserDoc extends (0, swagger_1.PartialType)(create_user_dto_1.CreateUserDoc) {
}
exports.UpdateUserDoc = UpdateUserDoc;
//# sourceMappingURL=update-user.dto.js.map