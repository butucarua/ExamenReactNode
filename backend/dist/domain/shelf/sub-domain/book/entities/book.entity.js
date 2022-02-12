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
exports.BookEntity = exports.BookGenres = void 0;
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../../../../infrastructure/entities/base.entity");
const shelf_entity_1 = require("../../../entities/shelf.entity");
var BookGenres;
(function (BookGenres) {
    BookGenres["ACTION"] = "action";
    BookGenres["ADVENTURE"] = "adventure";
    BookGenres["CLASSICS"] = "classics";
    BookGenres["COMIC"] = "comic";
    BookGenres["DETECTIVE"] = "detective";
    BookGenres["FANTASY"] = "fantasy";
    BookGenres["FICTION"] = "fiction";
    BookGenres["HORROR"] = "horror";
    BookGenres["ROMANCE"] = "romance";
    BookGenres["SF"] = "sf";
    BookGenres["HISTORY"] = "history";
    BookGenres["CRIME"] = "crime";
    BookGenres["SUSPENSE"] = "suspense";
})(BookGenres = exports.BookGenres || (exports.BookGenres = {}));
let BookEntity = class BookEntity extends base_entity_1.BaseEntity {
    constructor(input) {
        super(input);
    }
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    (0, typeorm_1.Column)({ name: 'title' }),
    __metadata("design:type", String)
], BookEntity.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    (0, typeorm_1.Column)({ name: 'genre', type: "enum", enum: BookGenres, default: BookGenres.ACTION }),
    __metadata("design:type", String)
], BookEntity.prototype, "genre", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => shelf_entity_1.ShelfEntity, shelf => shelf.books),
    __metadata("design:type", shelf_entity_1.ShelfEntity)
], BookEntity.prototype, "shelf", void 0);
BookEntity = __decorate([
    (0, typeorm_1.Entity)('book'),
    __metadata("design:paramtypes", [Object])
], BookEntity);
exports.BookEntity = BookEntity;
//# sourceMappingURL=book.entity.js.map