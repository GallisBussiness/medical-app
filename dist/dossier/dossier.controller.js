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
exports.DossierController = void 0;
const common_1 = require("@nestjs/common");
const dossier_service_1 = require("./dossier.service");
const create_dossier_dto_1 = require("./dto/create-dossier.dto");
const update_dossier_dto_1 = require("./dto/update-dossier.dto");
let DossierController = class DossierController {
    constructor(dossierService) {
        this.dossierService = dossierService;
    }
    create(createDossierDto) {
        return this.dossierService.create(createDossierDto);
    }
    findAll() {
        return this.dossierService.findAll();
    }
    findOne(id) {
        return this.dossierService.findOne(id);
    }
    findByEtudiant(id) {
        return this.dossierService.findByEtudiant(id);
    }
    update(id, updateDossierDto) {
        return this.dossierService.update(id, updateDossierDto);
    }
    remove(id) {
        return this.dossierService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dossier_dto_1.CreateDossierDto]),
    __metadata("design:returntype", void 0)
], DossierController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DossierController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DossierController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('byetudiant/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DossierController.prototype, "findByEtudiant", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dossier_dto_1.UpdateDossierDto]),
    __metadata("design:returntype", void 0)
], DossierController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DossierController.prototype, "remove", null);
DossierController = __decorate([
    (0, common_1.Controller)('dossier'),
    __metadata("design:paramtypes", [dossier_service_1.DossierService])
], DossierController);
exports.DossierController = DossierController;
//# sourceMappingURL=dossier.controller.js.map