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
exports.DocController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const doc_service_1 = require("./doc.service");
const create_doc_dto_1 = require("./dto/create-doc.dto");
const update_doc_dto_1 = require("./dto/update-doc.dto");
let DocController = class DocController {
    constructor(docService) {
        this.docService = docService;
    }
    create(files, createDocDto) {
        const dtos = files.map(f => (Object.assign(Object.assign({}, createDocDto), { nom: f.filename })));
        return this.docService.createMany(dtos);
    }
    findAll() {
        return this.docService.findAll();
    }
    findByDossier(id) {
        return this.docService.findByDossier(id);
    }
    findOne(id) {
        return this.docService.findOne(id);
    }
    update(id, updateDocDto) {
        return this.docService.update(id, updateDocDto);
    }
    remove(id) {
        return this.docService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('docs')),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, create_doc_dto_1.CreateDocDto]),
    __metadata("design:returntype", void 0)
], DocController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DocController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('bydossier/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocController.prototype, "findByDossier", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_doc_dto_1.UpdateDocDto]),
    __metadata("design:returntype", void 0)
], DocController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocController.prototype, "remove", null);
DocController = __decorate([
    (0, common_1.Controller)('doc'),
    __metadata("design:paramtypes", [doc_service_1.DocService])
], DocController);
exports.DocController = DocController;
//# sourceMappingURL=doc.controller.js.map