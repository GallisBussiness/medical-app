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
exports.BulletinSchema = exports.Bulletin = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const dossier_entity_1 = require("../../dossier/entities/dossier.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const uuid_1 = require("uuid");
let Bulletin = class Bulletin {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Bulletin.prototype, "examensDemandes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Bulletin.prototype, "service", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Bulletin.prototype, "etablissement", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Bulletin.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, default: (0, uuid_1.v4)() }),
    __metadata("design:type", String)
], Bulletin.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, required: true, ref: dossier_entity_1.Dossier.name, autopopulate: true }),
    __metadata("design:type", dossier_entity_1.Dossier)
], Bulletin.prototype, "dossier", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, required: true, ref: user_entity_1.User.name, autopopulate: true }),
    __metadata("design:type", user_entity_1.User)
], Bulletin.prototype, "user", void 0);
Bulletin = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Bulletin);
exports.Bulletin = Bulletin;
exports.BulletinSchema = mongoose_1.SchemaFactory.createForClass(Bulletin);
//# sourceMappingURL=bulletin.entity.js.map