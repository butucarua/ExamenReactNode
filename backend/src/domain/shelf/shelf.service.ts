import { Injectable } from '@nestjs/common';

import { ShelfRepository } from '@/domain/shelf/shelf.repository';
import { CreateShelfDto } from '@/domain/shelf/dto/create-shelf.dto';
import { ShelfEntity } from '@/domain/shelf/entities/shelf.entity';
import { UpdateShelfDto } from '@/domain/shelf/dto/update-shelf.dto';
import { DeleteResult } from 'typeorm';
import { GetShelfById } from '@/domain/shelf/dto/get-shelf-by-id';
import { GetShelfByName } from '@/domain/shelf/dto/get-shelf-by-name';

@Injectable()
export class ShelfService {
  constructor(
    private shelfRepository: ShelfRepository,
  ) {}

  async createShelf(createShelfDto: CreateShelfDto): Promise<ShelfEntity> {
    return this.shelfRepository.createShelf(createShelfDto);
  }

  async updateShelf(updateShelf: UpdateShelfDto): Promise<ShelfEntity> {
    return this.shelfRepository.updateShelf(updateShelf);
  }

  async getById(getById: GetShelfById): Promise<ShelfEntity> {
    return this.shelfRepository.getById(getById.id);
  }

  async getByName(getByName: GetShelfByName): Promise<ShelfEntity[]> {
    console.log(getByName,'getBYNAMEE')
    return this.shelfRepository.getByNameLike(getByName.name);
  }

  async getByDescription(description: string): Promise<ShelfEntity> {
    return this.shelfRepository.getByDescription(description);
  }

  async deleteById(id: string): Promise<boolean> {
    return this.shelfRepository.deleteById(id);
  }

  async getAll(): Promise<ShelfEntity[]> {
    // const mock = ShelfEntity.mock();
    return await this.shelfRepository.getAll();
  }
}
