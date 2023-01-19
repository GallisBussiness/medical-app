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
exports.EtudiantService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const etudiant_entity_1 = require("./entities/etudiant.entity");
let EtudiantService = class EtudiantService {
    constructor(etudiantModel) {
        this.etudiantModel = etudiantModel;
    }
    async create(createEtudiantDto) {
        try {
            const createdEtudiant = new this.etudiantModel(createEtudiantDto);
            return await createdEtudiant.save();
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException(error.message, 500);
        }
    }
    async findAll() {
        try {
            return await this.etudiantModel.find();
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
    async findOne(id) {
        try {
            return await this.etudiantModel.findById(id);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
    async update(id, updateEtudiantDto) {
        try {
            return await this.etudiantModel.findByIdAndUpdate(id, updateEtudiantDto);
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException(error.message, 500);
        }
    }
    async remove(id) {
        try {
            return await this.etudiantModel.findByIdAndDelete(id);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
};
EtudiantService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(etudiant_entity_1.Etudiant.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EtudiantService);
exports.EtudiantService = EtudiantService;
//# sourceMappingURL=etudiant.service.js.map