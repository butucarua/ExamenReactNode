import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiClientService {
  constructor(public httpService: HttpService) {}

  setApiClient(url: string): void {
    this.httpService.axiosRef.defaults.baseURL = url;
  }

  setToken(token: string): void {
    const headers = {
      ...this.httpService.axiosRef.defaults.headers,
      Autorization: token,
    };
    this.httpService.axiosRef.defaults.headers = headers;
  }

  setHeaders(headers: Record<string, unknown>): void {
    const currentHeaders = {
      ...this.httpService.axiosRef.defaults.headers,
      ...headers,
    };
    this.httpService.axiosRef.defaults.headers = currentHeaders;
  }
}
