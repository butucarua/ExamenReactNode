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
exports.ShelfController = void 0;
const common_1 = require("@nestjs/common");
const create_shelf_dto_1 = require("./dto/create-shelf.dto");
const shelf_service_1 = require("./shelf.service");
const update_shelf_dto_1 = require("./dto/update-shelf.dto");
const get_shelf_by_id_1 = require("./dto/get-shelf-by-id");
const get_shelf_by_name_1 = require("./dto/get-shelf-by-name");
const delete_shelf_by_id_1 = require("./dto/delete-shelf-by-id");
let ShelfController = class ShelfController {
    constructor(shelfService) {
        this.shelfService = shelfService;
    }
    createShelf(createShelf) {
        return this.shelfService.createShelf(createShelf);
    }
    updateShelf(updateShelf) {
        return this.shelfService.updateShelf(updateShelf);
    }
    getShelfById(getById) {
        return this.shelfService.getById(getById);
    }
    getShelfByName(getByName) {
        return this.shelfService.getByName(getByName);
    }
    deleteShelfById(deleteById) {
        return this.shelfService.deleteById(deleteById.id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_shelf_dto_1.CreateShelfDto]),
    __metadata("design:returntype", Promise)
], ShelfController.prototype, "createShelf", null);
__decorate([
    (0, common_1.Put)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_shelf_dto_1.UpdateShelfDto]),
    __metadata("design:returntype", Promise)
], ShelfController.prototype, "updateShelf", null);
__decorate([
    (0, common_1.Get)('id/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_shelf_by_id_1.GetShelfById]),
    __metadata("design:returntype", Promise)
], ShelfController.prototype, "getShelfById", null);
__decorate([
    (0, common_1.Get)('name/:name'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_shelf_by_name_1.GetShelfByName]),
    __metadata("design:returntype", Promise)
], ShelfController.prototype, "getShelfByName", null);
__decorate([
    (0, common_1.Delete)('id/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_shelf_by_id_1.DeleteShelfById]),
    __metadata("design:returntype", Promise)
], ShelfController.prototype, "deleteShelfById", null);
ShelfController = __decorate([
    (0, common_1.Controller)('shelf'),
    __metadata("design:paramtypes", [shelf_service_1.ShelfService])
], ShelfController);
exports.ShelfController = ShelfController;
//# sourceMappingURL=shelf.controller.js.map