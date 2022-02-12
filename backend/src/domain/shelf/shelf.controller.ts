import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';

import { CreateShelfDto } from '@/domain/shelf/dto/create-shelf.dto';
import { ShelfEntity } from '@/domain/shelf/entities/shelf.entity';
import { ShelfService } from '@/domain/shelf/shelf.service';
import { UpdateShelfDto } from '@/domain/shelf/dto/update-shelf.dto';
import { DeleteResult } from 'typeorm';
import { GetShelfById } from '@/domain/shelf/dto/get-shelf-by-id';
import { GetShelfByName } from '@/domain/shelf/dto/get-shelf-by-name';
import { DeleteShelfById } from '@/domain/shelf/dto/delete-shelf-by-id';

@Controller('shelf')
export class ShelfController {
  constructor(private readonly shelfService: ShelfService) {}

  @Post()
  createShelf(@Body() createShelf: CreateShelfDto): Promise<ShelfEntity> {
    return this.shelfService.createShelf(createShelf);
  }

  @Put('')
  updateShelf(@Body() updateShelf: UpdateShelfDto): Promise<ShelfEntity> {
    return this.shelfService.updateShelf(updateShelf);
  }

  @Get('id/:id')
  getShelfById(@Param() getById: GetShelfById): Promise<ShelfEntity> {
    return this.shelfService.getById(getById);
  }

  @Get('name/:name')
  getShelfByName(@Param() getByName: GetShelfByName): Promise<ShelfEntity[]> {
    return this.shelfService.getByName(getByName);
  }

  @Delete('id/:id')
  deleteShelfById(@Param() deleteById: DeleteShelfById): Promise<boolean> {
    return this.shelfService.deleteById(deleteById.id);
  }
}
