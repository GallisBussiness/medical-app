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
exports.BulletinController = void 0;
const common_1 = require("@nestjs/common");
const bulletin_service_1 = require("./bulletin.service");
const create_bulletin_dto_1 = require("./dto/create-bulletin.dto");
const update_bulletin_dto_1 = require("./dto/update-bulletin.dto");
let BulletinController = class BulletinController {
    constructor(bulletinService) {
        this.bulletinService = bulletinService;
    }
    create(createBulletinDto) {
        return this.bulletinService.create(createBulletinDto);
    }
    findAll() {
        return this.bulletinService.findAll();
    }
    findByEtudiant(id) {
        return this.bulletinService.findByDossier(id);
    }
    findOne(id) {
        return this.bulletinService.findOne(id);
    }
    update(id, updateBulletinDto) {
        return this.bulletinService.update(id, updateBulletinDto);
    }
    remove(id) {
        return this.bulletinService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bulletin_dto_1.CreateBulletinDto]),
    __metadata("design:returntype", void 0)
], BulletinController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BulletinController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('bydossier/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BulletinController.prototype, "findByEtudiant", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BulletinController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bulletin_dto_1.UpdateBulletinDto]),
    __metadata("design:returntype", void 0)
], BulletinController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BulletinController.prototype, "remove", null);
BulletinController = __decorate([
    (0, common_1.Controller)('bulletin'),
    __metadata("design:paramtypes", [bulletin_service_1.BulletinService])
], BulletinController);
exports.BulletinController = BulletinController;
//# sourceMappingURL=bulletin.controller.js.map