"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NiveauModule = void 0;
const common_1 = require("@nestjs/common");
const niveau_service_1 = require("./niveau.service");
const niveau_controller_1 = require("./niveau.controller");
const mongoose_1 = require("@nestjs/mongoose");
const niveau_entity_1 = require("./entities/niveau.entity");
let NiveauModule = class NiveauModule {
};
NiveauModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: niveau_entity_1.Niveau.name, schema: niveau_entity_1.NiveauSchema }])],
        controllers: [niveau_controller_1.NiveauController],
        providers: [niveau_service_1.NiveauService],
        exports: [niveau_service_1.NiveauService]
    })
], NiveauModule);
exports.NiveauModule = NiveauModule;
//# sourceMappingURL=niveau.module.js.map