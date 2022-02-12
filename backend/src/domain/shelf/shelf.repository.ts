// Nest dependencies
import { UnprocessableEntityException, NotFoundException, Injectable, ConflictException } from '@nestjs/common'

// Other dependencies
import { Repository, EntityRepository, DeleteResult, Like } from 'typeorm'

// Local files
import { ShelfEntity } from '@/domain/shelf/entities/shelf.entity'
import { CreateShelfDto } from '@/domain/shelf/dto/create-shelf.dto'
import { UpdateShelfDto } from '@/domain/shelf/dto/update-shelf.dto'

@EntityRepository(ShelfEntity)
export class ShelfRepository extends Repository<ShelfEntity> {
    constructor() {
      super()
    }

    async createShelf(dto: CreateShelfDto): Promise<ShelfEntity> {
        const alreadyExists = await this.getByName(dto.name);

        if (alreadyExists) throw new ConflictException('A shelf with this name already exists');

        const newShelf: ShelfEntity = new ShelfEntity()
        newShelf.description = dto.description;
        newShelf.name = dto.name

        try {
            const created = await this.save(newShelf)
            return created;
        } catch (error) {
            throw new UnprocessableEntityException(error.errmsg)
        }
    }

    async updateShelf(dto: UpdateShelfDto): Promise<ShelfEntity> {
        const shelf = await this.getById(dto.id);

        if (!shelf) throw new NotFoundException('Shelf with given id does not exists')

        if (dto.description) shelf.description = dto.description;
        if (dto.name) shelf.name = dto.name;

        try {
            const created = await this.save(shelf)
            return created;
        } catch (error) {
            throw new UnprocessableEntityException(error.errmsg)
        }
    }

    async getAll(): Promise<ShelfEntity[]> {
        try {
            const books: ShelfEntity[] = await this.find()
            return books;
        } catch (err) {
            throw new NotFoundException('No books could be found')
        }
    }

    async getByDescription(description: string): Promise<ShelfEntity> {
        try {
            const book: ShelfEntity = await this.findOneOrFail({ description })
            return book
        } catch (err) {
            throw new NotFoundException('Shelf could not be found by given description')
        }
    }

    async getByNameLike(name: string): Promise<ShelfEntity[]> {
        try {
            const shelves = await this.find({ where: {name: Like(`%${name}%`)}, relations: ['books']})
            return shelves
        } catch (err) {
            throw new NotFoundException('Shelf could not be found by given description')
        }
    }

    async getById(id: string): Promise<ShelfEntity> {
        try {
            return await this.findOneOrFail({ id })
        } catch (err) {
            throw new NotFoundException('Shelf could not be found by given id')
        }
    }

    async getByName(name: string): Promise<ShelfEntity> {
        try {
            return await this.findOne({ name })
        } catch (err) {
            throw new NotFoundException('Shelf could not be found by given name')
        }
    }

    async deleteById(id: string): Promise<boolean> {
        try {
            const deleted = await this.delete({ id })
            return deleted.affected >= 1 ? true : false
        } catch (err) {
            throw new NotFoundException('Book could not be deleted by given id')
        }
    }
   
}