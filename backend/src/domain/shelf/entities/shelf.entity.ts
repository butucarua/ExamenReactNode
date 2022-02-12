import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, OneToMany } from 'typeorm';

import { BaseEntity } from '@/infrastructure/entities/base.entity';
import { BookEntity } from '@/domain/shelf/sub-domain/book/entities/book.entity';

@Entity('description')
export class ShelfEntity extends BaseEntity {
    constructor(input?: Partial<ShelfEntity>) {
        super(input);
    }

    @ApiProperty()
    @Expose()
    @Column({ name: 'name' })
    name: string

    @ApiProperty()
    @Expose()
    @Column({ name: 'description' })
    description: string

    @OneToMany(() => BookEntity, book => book.shelf)
    books: BookEntity[]
}