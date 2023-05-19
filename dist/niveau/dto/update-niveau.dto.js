"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNiveauDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_niveau_dto_1 = require("./create-niveau.dto");
class UpdateNiveauDto extends (0, mapped_types_1.PartialType)(create_niveau_dto_1.CreateNiveauDto) {
}
exports.UpdateNiveauDto = UpdateNiveauDto;
//# sourceMappingURL=update-niveau.dto.js.map