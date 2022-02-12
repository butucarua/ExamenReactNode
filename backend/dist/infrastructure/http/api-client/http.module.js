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
exports.HttpModule = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
let HttpModule = class HttpModule {
    constructor(httpService) {
        this.httpService = httpService;
    }
    onModuleInit() {
        const logger = new common_1.Logger('AxiosInterceptor');
        const axios = this.httpService.axiosRef;
        axios.interceptors.request.use((config) => {
            config['metadata'] = { ...config['metadata'], startDate: new Date() };
            logger.verbose(`${config.method.toUpperCase()} ${config.baseURL} ${config.url}`);
            return config;
        });
        axios.interceptors.response.use((response) => {
            const { config, request, status, statusText } = response;
            config['metadata'] = { ...config['metadata'], endDate: new Date() };
            const duration = config['metadata'].endDate.getTime() -
                config['metadata'].startDate.getTime();
            logger.verbose(`Finished ${request.method} request to ${config.baseURL} ${config.url} with status ${status} ${statusText} in ${duration}ms`);
            return response;
        }, (error) => {
            logger.error(`Error on ${error.config.method} request to ${error.config.url} with error ${error.message}`);
            logger.error(error);
            return Promise.reject(error);
        });
    }
};
HttpModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule, common_1.Logger],
        exports: [axios_1.HttpModule],
    }),
    __metadata("design:paramtypes", [axios_1.HttpService])
], HttpModule);
exports.HttpModule = HttpModule;
//# sourceMappingURL=http.module.js.map