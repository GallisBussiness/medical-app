"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulletinModule = void 0;
const common_1 = require("@nestjs/common");
const bulletin_service_1 = require("./bulletin.service");
const bulletin_controller_1 = require("./bulletin.controller");
const mongoose_1 = require("@nestjs/mongoose");
const bulletin_entity_1 = require("./entities/bulletin.entity");
let BulletinModule = class BulletinModule {
};
BulletinModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeatureAsync([{ name: bulletin_entity_1.Bulletin.name, useFactory: () => {
                        const schema = bulletin_entity_1.BulletinSchema;
                        schema.plugin(require('mongoose-autopopulate'));
                        schema.plugin(require('mongoose-serial'), { field: "numero" });
                        return schema;
                    }, }])
        ],
        controllers: [bulletin_controller_1.BulletinController],
        providers: [bulletin_service_1.BulletinService]
    })
], BulletinModule);
exports.BulletinModule = BulletinModule;
//# sourceMappingURL=bulletin.module.js.map