"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTraitementDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_traitement_dto_1 = require("./create-traitement.dto");
class UpdateTraitementDto extends (0, mapped_types_1.PartialType)(create_traitement_dto_1.CreateTraitementDto) {
}
exports.UpdateTraitementDto = UpdateTraitementDto;
//# sourceMappingURL=update-traitement.dto.js.map