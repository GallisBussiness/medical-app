"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBulletinDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_bulletin_dto_1 = require("./create-bulletin.dto");
class UpdateBulletinDto extends (0, mapped_types_1.PartialType)(create_bulletin_dto_1.CreateBulletinDto) {
}
exports.UpdateBulletinDto = UpdateBulletinDto;
//# sourceMappingURL=update-bulletin.dto.js.map