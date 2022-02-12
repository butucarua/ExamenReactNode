"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresDatabaseProviderModule = void 0;
const common_1 = require("@nestjs/common");
const shelf_entity_1 = require("../../../domain/shelf/entities/shelf.entity");
const typeorm_1 = require("@nestjs/typeorm");
const book_entity_1 = require("../../../domain/shelf/sub-domain/book/entities/book.entity");
let PostgresDatabaseProviderModule = class PostgresDatabaseProviderModule {
};
PostgresDatabaseProviderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: "postgres",
                url: "postgres://ouefgjzxmljbcp:36d3403a2f79b1c6a7b8cf91e06c5a100f6b1a00ba5fba3c1188a01ec3ac1ccb@ec2-52-30-133-191.eu-west-1.compute.amazonaws.com:5432/d6amcim241852v",
                entities: [shelf_entity_1.ShelfEntity, book_entity_1.BookEntity],
                ssl: true,
                extra: {
                    ssl: {
                        rejectUnauthorized: false,
                    },
                },
                synchronize: true,
                logging: true
            }),
        ],
    })
], PostgresDatabaseProviderModule);
exports.PostgresDatabaseProviderModule = PostgresDatabaseProviderModule;
//# sourceMappingURL=provider.module.js.map