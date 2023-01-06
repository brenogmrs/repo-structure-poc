"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUsersDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const user_entity_1 = require("../../../../../shared/entities/user.entity");
class ListUsersDto extends (0, mapped_types_1.PartialType)((0, mapped_types_1.OmitType)(user_entity_1.User, ['id', 'password'])) {
}
exports.ListUsersDto = ListUsersDto;
//# sourceMappingURL=list-users.dto.js.map