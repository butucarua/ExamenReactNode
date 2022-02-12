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
exports.ShelfRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const shelf_entity_1 = require("../../entities/shelf.entity");
let ShelfRepository = class ShelfRepository extends typeorm_1.Repository {
    constructor() {
        super();
    }
    async getAllOrders() {
        try {
            const orders = await this.find();
            return orders;
        }
        catch (err) {
            throw new common_1.NotFoundException('No orders could be found');
        }
    }
    async getByDescription(description) {
        try {
            const shelf = await this.findOneOrFail({ description });
            return shelf;
        }
        catch (err) {
            throw new common_1.NotFoundException('Order could not be found by given quantity');
        }
    }
    async getById(id) {
        try {
            return await this.findOneOrFail({ id });
        }
        catch (err) {
            throw new common_1.NotFoundException('Order could not found by given id');
        }
    }
    async createOrder(dto) {
        const newShelf = new shelf_entity_1.ShelfEntity();
        newShelf.description = dto.description;
        try {
            const created = await this.save(newShelf);
            return created;
        }
        catch (error) {
            console.log(error, 'error is');
            throw new common_1.UnprocessableEntityException(error.errmsg);
        }
    }
};
ShelfRepository = __decorate([
    (0, typeorm_1.EntityRepository)(shelf_entity_1.ShelfEntity),
    __metadata("design:paramtypes", [])
], ShelfRepository);
exports.ShelfRepository = ShelfRepository;
//# sourceMappingURL=shelf.repository.js.map