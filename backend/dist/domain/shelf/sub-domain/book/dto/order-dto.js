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
var OrderDto_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDto = void 0;
const order_entity_1 = require("@/domain/order/entities/order.entity");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
let OrderDto = OrderDto_1 = class OrderDto {
    static from(dto) {
        const order = new OrderDto_1();
        order.id = dto.id;
        order.quantity = dto.quantity;
        return order;
    }
    static fromEntity(entity) {
        return this.from({
            id: entity.id,
            quantity: entity.quantity,
        });
    }
    toEntity() {
        const order = new order_entity_1.OrderEntity();
        order.id = this.id;
        order.quantity = this.quantity;
        order.createdAt = new Date();
        order.updatedAt = new Date();
        return it;
    }
};
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], OrderDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({ required: true }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], OrderDto.prototype, "quantity", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], OrderDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], OrderDto.prototype, "updatedAt", void 0);
OrderDto = OrderDto_1 = __decorate([
    (0, class_transformer_1.Exclude)()
], OrderDto);
exports.OrderDto = OrderDto;
//# sourceMappingURL=order-dto.js.map