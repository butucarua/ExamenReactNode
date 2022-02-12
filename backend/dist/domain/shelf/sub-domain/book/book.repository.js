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
exports.BookRepository = void 0;
const book_entity_1 = require("./entities/book.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let BookRepository = class BookRepository extends typeorm_1.Repository {
    constructor() {
        super();
    }
    async createBook(dto, shelf) {
        const newBook = new book_entity_1.BookEntity();
        newBook.title = dto.title;
        newBook.genre = dto.genre;
        newBook.shelf = shelf;
        try {
            const created = await this.save(newBook);
            return created;
        }
        catch (error) {
            throw new common_1.UnprocessableEntityException(error.errmsg);
        }
    }
    async updateBook(dto) {
        const newBook = new book_entity_1.BookEntity();
        newBook.title = dto.title;
        try {
            const created = await this.save(newBook);
            return created;
        }
        catch (error) {
            throw new common_1.UnprocessableEntityException(error.errmsg);
        }
    }
    async getAll() {
        try {
            const books = await this.find({ relations: ['shelf'] });
            return books;
        }
        catch (err) {
            throw new common_1.NotFoundException('No books could be found');
        }
    }
    async getByTitle(title) {
        try {
            const book = await this.findOneOrFail({ title });
            return book;
        }
        catch (err) {
            throw new common_1.NotFoundException('Book could not be found by given description');
        }
    }
    async getById(id) {
        try {
            return await this.findOneOrFail({ id });
        }
        catch (err) {
            throw new common_1.NotFoundException('Book could not be found by given id');
        }
    }
    async deleteById(id) {
        try {
            return await this.delete({ id });
        }
        catch (err) {
            throw new common_1.NotFoundException('Book could not be deleted by given id');
        }
    }
};
BookRepository = __decorate([
    (0, typeorm_1.EntityRepository)(book_entity_1.BookEntity),
    __metadata("design:paramtypes", [])
], BookRepository);
exports.BookRepository = BookRepository;
//# sourceMappingURL=book.repository.js.map