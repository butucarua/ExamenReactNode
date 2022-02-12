import { HttpService } from '@nestjs/axios';
import { OnModuleInit } from '@nestjs/common';
export declare class HttpModule implements OnModuleInit {
    private readonly httpService;
    constructor(httpService: HttpService);
    onModuleInit(): any;
}
