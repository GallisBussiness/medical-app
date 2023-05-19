"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DossierModule = void 0;
const common_1 = require("@nestjs/common");
const dossier_service_1 = require("./dossier.service");
const dossier_controller_1 = require("./dossier.controller");
const mongoose_1 = require("@nestjs/mongoose");
const dossier_entity_1 = require("./entities/dossier.entity");
let DossierModule = class DossierModule {
};
DossierModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeatureAsync([{ name: dossier_entity_1.Dossier.name, useFactory: () => {
                        const schema = dossier_entity_1.DossierSchema;
                        schema.plugin(require('mongoose-autopopulate'));
                        return schema;
                    } }])],
        controllers: [dossier_controller_1.DossierController],
        providers: [dossier_service_1.DossierService]
    })
], DossierModule);
exports.DossierModule = DossierModule;
//# sourceMappingURL=dossier.module.js.map