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
exports.DossierSchema = exports.Dossier = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const class_transformer_1 = require("class-transformer");
const mongoose_2 = require("mongoose");
const etudiant_entity_1 = require("../../etudiant/entities/etudiant.entity");
let Dossier = class Dossier {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Dossier.prototype, "groupe_sanguin", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Dossier.prototype, "poids", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Dossier.prototype, "taille", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Dossier.prototype, "handicap_particulier", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Dossier.prototype, "maladie_chronique", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Dossier.prototype, "allergies", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Dossier.prototype, "antecedants_medicaux", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, required: true, ref: etudiant_entity_1.Etudiant.name, autopopulate: true }),
    (0, class_transformer_1.Type)(() => etudiant_entity_1.Etudiant),
    __metadata("design:type", etudiant_entity_1.Etudiant)
], Dossier.prototype, "etudiant", void 0);
Dossier = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Dossier);
exports.Dossier = Dossier;
exports.DossierSchema = mongoose_1.SchemaFactory.createForClass(Dossier);
//# sourceMappingURL=dossier.entity.js.map