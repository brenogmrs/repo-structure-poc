"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBuilder = void 0;
const user_entity_1 = require("../../../../shared/entities/user.entity");
class UserBuilder {
    constructor() {
        this.model = {};
    }
    withUsername(username) {
        this.model.username = username;
        return this;
    }
    withEmail(email) {
        this.model.email = email;
        return this;
    }
    withPassword(password) {
        this.model.password = password;
        return this;
    }
    withCreatedAt(created_at) {
        this.model.createdAt = created_at;
        return this;
    }
    withUpdatedAt(updated_at) {
        this.model.updatedAt = updated_at;
        return this;
    }
    withDeletedAt(deleted_at) {
        this.model.deletedAt = deleted_at;
        return this;
    }
    build() {
        return this.model;
    }
}
exports.UserBuilder = UserBuilder;
//# sourceMappingURL=user.model.builder.js.map