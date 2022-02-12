import { Module } from '@nestjs/common';
// import { SequelizeModule } from '@nestjs/sequelize';

import { ShelfController } from '@/domain/shelf/shelf.controller';
import { ShelfService } from '@/domain/shelf/shelf.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShelfRepository } from '@/domain/shelf/shelf.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ShelfRepository])],
  controllers: [ShelfController],
  providers: [ShelfService],
  exports: [ShelfService]
})
export class ShelfModule {}
