import { ConfigService } from '@nestjs/config';
export declare class AppConfigService {
    private configService;
    constructor(configService: ConfigService);
    get host(): string;
    get port(): string;
    get env(): string;
    get isProduction(): boolean;
    get uri(): string;
    get domain(): string;
}
