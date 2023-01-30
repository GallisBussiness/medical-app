"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocModule = void 0;
const common_1 = require("@nestjs/common");
const doc_service_1 = require("./doc.service");
const doc_controller_1 = require("./doc.controller");
const mongoose_1 = require("@nestjs/mongoose");
const doc_entity_1 = require("./entities/doc.entity");
const multer_1 = require("multer");
const platform_express_1 = require("@nestjs/platform-express");
const storage = (0, multer_1.diskStorage)({
    destination: function (req, file, cb) {
        cb(null, './uploads/docs');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
    },
});
let DocModule = class DocModule {
};
DocModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: doc_entity_1.Doc.name, schema: doc_entity_1.DocSchema }]),
            platform_express_1.MulterModule.register({
                storage
            })
        ],
        controllers: [doc_controller_1.DocController],
        providers: [doc_service_1.DocService]
    })
], DocModule);
exports.DocModule = DocModule;
//# sourceMappingURL=doc.module.js.map