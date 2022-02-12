"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compression = require("compression");
const cookieParser = require("cookie-parser");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const config_service_1 = require("./config/app/config.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const appConfig = app.get(config_service_1.AppConfigService);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
    }));
    app.use(cookieParser());
    app.use(compression());
    app.setGlobalPrefix('/api');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('VirtualShelf')
        .setDescription('API DOCS - EXAMEN ^^')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    await app.init();
    await app.listen(Number(appConfig.port));
}
bootstrap();
//# sourceMappingURL=main.js.map