import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get host(): string {
    return this.configService.get<string>('app.host');
  }

  get port(): string {
    return this.configService.get<string>('app.port');
  }

  get env(): string {
    return this.configService.get<string>('app.env');
  }

  get isProduction(): boolean {
    return this.configService.get<string>('app.env') === 'production';
  }

  get uri(): string {
    return this.configService.get<string>('app.uri');
  }

  get domain(): string {
    return this.configService.get<string>('app.domain');
  }
}
