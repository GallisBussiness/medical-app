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
exports.DepartementSchema = exports.Departement = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const ufr_entity_1 = require("../../ufr/entities/ufr.entity");
let Departement = class Departement {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, unique: true }),
    __metadata("design:type", String)
], Departement.prototype, "nom", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: ufr_entity_1.Ufr.name, autopopulate: true }),
    __metadata("design:type", ufr_entity_1.Ufr)
], Departement.prototype, "ufr", void 0);
Departement = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Departement);
exports.Departement = Departement;
exports.DepartementSchema = mongoose_1.SchemaFactory.createForClass(Departement);
//# sourceMappingURL=departement.entity.js.map