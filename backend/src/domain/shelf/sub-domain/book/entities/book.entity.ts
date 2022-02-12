import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, ManyToOne } from 'typeorm';

import { BaseEntity } from '@/infrastructure/entities/base.entity';
import * as Chance from 'chance';
import { ShelfController } from '@/domain/shelf/shelf.controller';
import { ShelfEntity } from '@/domain/shelf/entities/shelf.entity';

export enum BookGenres {
  ACTION = 'action',
  ADVENTURE = 'adventure',
  CLASSICS = 'classics',
  COMIC = 'comic',
  DETECTIVE = 'detective',
  FANTASY = 'fantasy',
  FICTION = 'fiction',
  HORROR = 'horror',
  ROMANCE = 'romance',
  SF = 'sf',
  HISTORY = 'history',
  CRIME = 'crime' ,
  SUSPENSE = 'suspense'
}

@Entity('book')
export class BookEntity extends BaseEntity {
    constructor(input?: Partial<BookEntity>) {
        super(input);
    }
    
    @ApiProperty()
    @Expose()
    @Column({ name: 'title' })
    title: string

    @ApiProperty()
    @Expose()
    @Column({ name: 'genre', type: "enum", enum: BookGenres, default: BookGenres.ACTION })
    genre: BookGenres

    @ManyToOne(() => ShelfEntity, shelf => shelf.books )
    shelf: ShelfEntity
}