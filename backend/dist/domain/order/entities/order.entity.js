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
exports.OrderEntity = void 0;
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../../infrastructure/entities/base.entity");
const Chance = require("chance");
let OrderEntity = class OrderEntity extends base_entity_1.BaseEntity {
    constructor(input) {
        super(input);
    }
    static mock(defaults = {}) {
        var chance = new Chance();
        const mockOrder = {
            id: chance.string(),
            quantity: chance.natural({ max: 10000 }),
            createdAt: chance.date(),
            updatedAt: chance.date(),
        };
        return { ...mockOrder, ...defaults };
    }
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Expose)(),
    (0, typeorm_1.Column)({ name: 'quantity' }),
    __metadata("design:type", Number)
], OrderEntity.prototype, "quantity", void 0);
OrderEntity = __decorate([
    (0, typeorm_1.Entity)('orders'),
    __metadata("design:paramtypes", [Object])
], OrderEntity);
exports.OrderEntity = OrderEntity;
//# sourceMappingURL=order.entity.js.map