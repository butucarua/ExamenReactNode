import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppConfigModule } from '@/config/app/config.module';
import { ShelfModule } from '@/domain/shelf/shelf.module';
import { PostgresDatabaseProviderModule } from '@/providers/database/postgres/provider.module';
import { BookModule } from '@/domain/shelf/sub-domain/book/book.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'build'),
    }),
    AppConfigModule,
    PostgresDatabaseProviderModule,
    ShelfModule,
    BookModule
  ],
})
export class AppModule {}
