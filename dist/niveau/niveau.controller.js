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
exports.NiveauController = void 0;
const common_1 = require("@nestjs/common");
const niveau_service_1 = require("./niveau.service");
const create_niveau_dto_1 = require("./dto/create-niveau.dto");
const update_niveau_dto_1 = require("./dto/update-niveau.dto");
let NiveauController = class NiveauController {
    constructor(niveauService) {
        this.niveauService = niveauService;
    }
    create(createNiveauDto) {
        return this.niveauService.create(createNiveauDto);
    }
    findAll() {
        return this.niveauService.findAll();
    }
    findOne(id) {
        return this.niveauService.findOne(id);
    }
    update(id, updateNiveauDto) {
        return this.niveauService.update(id, updateNiveauDto);
    }
    remove(id) {
        return this.niveauService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_niveau_dto_1.CreateNiveauDto]),
    __metadata("design:returntype", void 0)
], NiveauController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NiveauController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NiveauController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_niveau_dto_1.UpdateNiveauDto]),
    __metadata("design:returntype", void 0)
], NiveauController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NiveauController.prototype, "remove", null);
NiveauController = __decorate([
    (0, common_1.Controller)('niveau'),
    __metadata("design:paramtypes", [niveau_service_1.NiveauService])
], NiveauController);
exports.NiveauController = NiveauController;
//# sourceMappingURL=niveau.controller.js.map