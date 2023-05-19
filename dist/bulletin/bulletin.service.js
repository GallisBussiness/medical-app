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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulletinService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bulletin_entity_1 = require("./entities/bulletin.entity");
let BulletinService = class BulletinService {
    constructor(bulletinModel) {
        this.bulletinModel = bulletinModel;
    }
    async create(createBulletinDto) {
        try {
            const createdBulletin = new this.bulletinModel(createBulletinDto);
            return await createdBulletin.save();
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
    async findAll() {
        try {
            return await this.bulletinModel.find().sort({ createdAt: -1 });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
    async findByDossier(id) {
        try {
            return await this.bulletinModel.find({ dossier: id }).sort({ createdAt: -1 });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
    async findOne(id) {
        try {
            return await this.bulletinModel.findById(id);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
    async update(id, updateBulletinDto) {
        try {
            return await this.bulletinModel.findByIdAndUpdate(id, updateBulletinDto);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
    async remove(id) {
        try {
            return await this.bulletinModel.findByIdAndDelete(id);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
};
BulletinService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(bulletin_entity_1.Bulletin.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BulletinService);
exports.BulletinService = BulletinService;
//# sourceMappingURL=bulletin.service.js.map