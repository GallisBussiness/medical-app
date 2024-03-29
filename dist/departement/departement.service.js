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
exports.DepartementService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const departement_entity_1 = require("./entities/departement.entity");
let DepartementService = class DepartementService {
    constructor(departementModel) {
        this.departementModel = departementModel;
    }
    async create(createDepartementDto) {
        try {
            const createdDepartement = new this.departementModel(createDepartementDto);
            return await createdDepartement.save();
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
    async findAll() {
        try {
            return await this.departementModel.find();
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
    async findOne(id) {
        try {
            return await this.departementModel.findById(id);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
    async update(id, updateDepartementDto) {
        try {
            return await this.departementModel.findByIdAndUpdate(id, updateDepartementDto);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
    async remove(id) {
        try {
            return await this.departementModel.findByIdAndDelete(id);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
};
DepartementService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(departement_entity_1.Departement.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DepartementService);
exports.DepartementService = DepartementService;
//# sourceMappingURL=departement.service.js.map