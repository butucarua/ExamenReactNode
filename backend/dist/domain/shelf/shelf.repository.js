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
const shelf_entity_1 = require("./entities/shelf.entity");
let ShelfRepository = class ShelfRepository extends typeorm_1.Repository {
    constructor() {
        super();
    }
    async createShelf(dto) {
        const alreadyExists = await this.getByName(dto.name);
        if (alreadyExists)
            throw new common_1.ConflictException('A shelf with this name already exists');
        const newShelf = new shelf_entity_1.ShelfEntity();
        newShelf.description = dto.description;
        newShelf.name = dto.name;
        try {
            const created = await this.save(newShelf);
            return created;
        }
        catch (error) {
            throw new common_1.UnprocessableEntityException(error.errmsg);
        }
    }
    async updateShelf(dto) {
        const shelf = await this.getById(dto.id);
        if (!shelf)
            throw new common_1.NotFoundException('Shelf with given id does not exists');
        if (dto.description)
            shelf.description = dto.description;
        if (dto.name)
            shelf.name = dto.name;
        try {
            const created = await this.save(shelf);
            return created;
        }
        catch (error) {
            throw new common_1.UnprocessableEntityException(error.errmsg);
        }
    }
    async getAll() {
        try {
            const books = await this.find();
            return books;
        }
        catch (err) {
            throw new common_1.NotFoundException('No books could be found');
        }
    }
    async getByDescription(description) {
        try {
            const book = await this.findOneOrFail({ description });
            return book;
        }
        catch (err) {
            throw new common_1.NotFoundException('Shelf could not be found by given description');
        }
    }
    async getByNameLike(name) {
        try {
            const shelves = await this.find({ where: { name: (0, typeorm_1.Like)(`%${name}%`) }, relations: ['books'] });
            return shelves;
        }
        catch (err) {
            throw new common_1.NotFoundException('Shelf could not be found by given description');
        }
    }
    async getById(id) {
        try {
            return await this.findOneOrFail({ id });
        }
        catch (err) {
            throw new common_1.NotFoundException('Shelf could not be found by given id');
        }
    }
    async getByName(name) {
        try {
            return await this.findOne({ name });
        }
        catch (err) {
            throw new common_1.NotFoundException('Shelf could not be found by given name');
        }
    }
    async deleteById(id) {
        try {
            const deleted = await this.delete({ id });
            return deleted.affected >= 1 ? true : false;
        }
        catch (err) {
            throw new common_1.NotFoundException('Book could not be deleted by given id');
        }
    }
};
ShelfRepository = __decorate([
    (0, typeorm_1.EntityRepository)(shelf_entity_1.ShelfEntity),
    __metadata("design:paramtypes", [])
], ShelfRepository);
exports.ShelfRepository = ShelfRepository;
//# sourceMappingURL=shelf.repository.js.map