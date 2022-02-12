import { CreateBookDto } from '@/domain/shelf/sub-domain/book/dto/create-book.dto';
declare const UpdateBookDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBookDto>>;
export declare class UpdateBookDto extends UpdateBookDto_base {
}
export {};
