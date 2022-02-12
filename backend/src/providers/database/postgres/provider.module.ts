import { Module } from "@nestjs/common";
import { ShelfEntity } from "@/domain/shelf/entities/shelf.entity";
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { BookEntity } from "@/domain/shelf/sub-domain/book/entities/book.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      url: "postgres://ouefgjzxmljbcp:36d3403a2f79b1c6a7b8cf91e06c5a100f6b1a00ba5fba3c1188a01ec3ac1ccb@ec2-52-30-133-191.eu-west-1.compute.amazonaws.com:5432/d6amcim241852v",
      entities: [ShelfEntity, BookEntity],
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
      synchronize: true,
      logging: true
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class PostgresDatabaseProviderModule {}
