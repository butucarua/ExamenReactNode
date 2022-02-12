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
exports.ShelfService = void 0;
const common_1 = require("@nestjs/common");
const shelf_repository_1 = require("../shelf/shelf.repository");
const shelf_entity_1 = require("../shelf/entities/shelf.entity");
let ShelfService = class ShelfService {
    constructor(shelfRepository) {
        this.shelfRepository = shelfRepository;
    }
    async findAllshelfs() {
        const mock = shelf_entity_1.ShelfEntity.mock();
        const data = await this.shelfRepository.getAllOrders();
        return data;
    }
    createOrder(createShelfDto) {
        return this.shelfRepository.createOrder(createShelfDto);
    }
    getById(id) {
        return this.shelfRepository.getById(id);
    }
};
ShelfService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [shelf_repository_1.ShelfRepository])
], ShelfService);
exports.ShelfService = ShelfService;
//# sourceMappingURL=shelf.service.js.map