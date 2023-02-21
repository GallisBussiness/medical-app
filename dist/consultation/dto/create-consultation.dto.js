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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateConsultationDto = void 0;
const class_validator_1 = require("class-validator");
class CreateConsultationDto {
}
__decorate([
    (0, class_validator_1.IsString)({ message: "date de consultation invalid !" }),
    __metadata("design:type", String)
], CreateConsultationDto.prototype, "dateDeConsultation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Number)
], CreateConsultationDto.prototype, "poids", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Number)
], CreateConsultationDto.prototype, "taille", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "tension invalid !" }),
    __metadata("design:type", String)
], CreateConsultationDto.prototype, "tension", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "temperature invalid !" }),
    __metadata("design:type", String)
], CreateConsultationDto.prototype, "temperature", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "poule invalid !" }),
    __metadata("design:type", String)
], CreateConsultationDto.prototype, "poule", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "glycemie invalid !" }),
    __metadata("design:type", String)
], CreateConsultationDto.prototype, "glycemie", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "corps cetonique invalid !" }),
    __metadata("design:type", String)
], CreateConsultationDto.prototype, "corps_cetonique", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "autres invalid !" }),
    __metadata("design:type", String)
], CreateConsultationDto.prototype, "autres", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "examen invalid !" }),
    __metadata("design:type", String)
], CreateConsultationDto.prototype, "examen", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)({ message: "traitement invalid !" }),
    __metadata("design:type", Array)
], CreateConsultationDto.prototype, "traitement", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "bilan invalid !" }),
    __metadata("design:type", String)
], CreateConsultationDto.prototype, "bilan", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "prochain invalid !" }),
    __metadata("design:type", String)
], CreateConsultationDto.prototype, "prochain_rv", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "referenece invalid !" }),
    __metadata("design:type", String)
], CreateConsultationDto.prototype, "reference", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "diagnostique invalid !" }),
    __metadata("design:type", String)
], CreateConsultationDto.prototype, "diagnostique", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: "plainte du jour invalid !" }),
    __metadata("design:type", String)
], CreateConsultationDto.prototype, "plainte_du_jour", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "type invalid !" }),
    __metadata("design:type", String)
], CreateConsultationDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", String)
], CreateConsultationDto.prototype, "numero", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], CreateConsultationDto.prototype, "dossier", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], CreateConsultationDto.prototype, "user", void 0);
exports.CreateConsultationDto = CreateConsultationDto;
//# sourceMappingURL=create-consultation.dto.js.map