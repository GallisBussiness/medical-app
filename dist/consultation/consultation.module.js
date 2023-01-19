"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultationModule = void 0;
const common_1 = require("@nestjs/common");
const consultation_service_1 = require("./consultation.service");
const consultation_controller_1 = require("./consultation.controller");
const mongoose_1 = require("@nestjs/mongoose");
const consultation_entity_1 = require("./entities/consultation.entity");
let ConsultationModule = class ConsultationModule {
};
ConsultationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeatureAsync([{ name: consultation_entity_1.Consultation.name, useFactory: () => {
                        const schema = consultation_entity_1.ConsultationSchema;
                        schema.plugin(require('mongoose-autopopulate'));
                        return schema;
                    }, }])
        ],
        controllers: [consultation_controller_1.ConsultationController],
        providers: [consultation_service_1.ConsultationService]
    })
], ConsultationModule);
exports.ConsultationModule = ConsultationModule;
//# sourceMappingURL=consultation.module.js.map