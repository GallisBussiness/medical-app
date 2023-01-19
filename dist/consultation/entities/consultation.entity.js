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
exports.ConsultationSchema = exports.Consultation = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const dossier_entity_1 = require("../../dossier/entities/dossier.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const uuid_1 = require("uuid");
let Consultation = class Consultation {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Consultation.prototype, "dateDeConsultation", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Consultation.prototype, "poids", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Consultation.prototype, "taille", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Consultation.prototype, "tension", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Consultation.prototype, "temperature", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Consultation.prototype, "poule", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Consultation.prototype, "glycemie", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Consultation.prototype, "corps_cetonique", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Consultation.prototype, "autres", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Consultation.prototype, "diagnostique", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Consultation.prototype, "examen", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Consultation.prototype, "bilan", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Consultation.prototype, "prochain_rv", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Consultation.prototype, "reference", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, default: (0, uuid_1.v4)() }),
    __metadata("design:type", String)
], Consultation.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Consultation.prototype, "plainte_du_jour", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Consultation.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Array, default: [] }),
    __metadata("design:type", Array)
], Consultation.prototype, "traitement", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, required: true, ref: dossier_entity_1.Dossier.name, autopopulate: true }),
    __metadata("design:type", dossier_entity_1.Dossier)
], Consultation.prototype, "dossier", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, required: true, ref: user_entity_1.User.name, autopopulate: true }),
    __metadata("design:type", user_entity_1.User)
], Consultation.prototype, "user", void 0);
Consultation = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Consultation);
exports.Consultation = Consultation;
exports.ConsultationSchema = mongoose_1.SchemaFactory.createForClass(Consultation);
//# sourceMappingURL=consultation.entity.js.map