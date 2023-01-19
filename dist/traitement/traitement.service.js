"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraitementService = void 0;
const common_1 = require("@nestjs/common");
let TraitementService = class TraitementService {
    create(createTraitementDto) {
        return 'This action adds a new traitement';
    }
    findAll() {
        return `This action returns all traitement`;
    }
    findOne(id) {
        return `This action returns a #${id} traitement`;
    }
    update(id, updateTraitementDto) {
        return `This action updates a #${id} traitement`;
    }
    remove(id) {
        return `This action removes a #${id} traitement`;
    }
};
TraitementService = __decorate([
    (0, common_1.Injectable)()
], TraitementService);
exports.TraitementService = TraitementService;
//# sourceMappingURL=traitement.service.js.map