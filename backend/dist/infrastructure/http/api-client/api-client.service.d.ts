import { HttpService } from '@nestjs/axios';
export declare class ApiClientService {
    httpService: HttpService;
    constructor(httpService: HttpService);
    setApiClient(url: string): void;
    setToken(token: string): void;
    setHeaders(headers: Record<string, unknown>): void;
}
