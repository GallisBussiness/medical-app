"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const etudiant_module_1 = require("./etudiant/etudiant.module");
const consultation_module_1 = require("./consultation/consultation.module");
const bulletin_module_1 = require("./bulletin/bulletin.module");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const event_emitter_1 = require("@nestjs/event-emitter");
const auth_middleware_1 = require("./auth/auth.middleware");
const dossier_module_1 = require("./dossier/dossier.module");
const doc_module_1 = require("./doc/doc.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(auth_middleware_1.AuthMiddleware)
            .exclude({ path: 'user/login', method: common_1.RequestMethod.POST })
            .forRoutes('*');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRootAsync({
                useFactory: async (config) => ({
                    uri: config.get('MONGODB_URL'),
                    autoCreate: true,
                }),
                inject: [config_1.ConfigService],
            }),
            jwt_1.JwtModule.registerAsync({
                useFactory: async (config) => {
                    return {
                        secret: config.get('JWT_SECRET'),
                        signOptions: { expiresIn: '24h' },
                    };
                },
                inject: [config_1.ConfigService],
            }),
            event_emitter_1.EventEmitterModule.forRoot(),
            user_module_1.UserModule,
            etudiant_module_1.EtudiantModule,
            consultation_module_1.ConsultationModule,
            bulletin_module_1.BulletinModule,
            dossier_module_1.DossierModule,
            doc_module_1.DocModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map